import React, { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  HelpCircle, 
  Search, 
  Filter,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  X,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Brain,
  Shield,
  Cpu,
  Database,
  Cloud,
  Zap,
  Target,
  TrendingUp,
  Lightbulb,
  Award,
  Eye,
  MessageCircle,
  Share2,
  Heart,
  Bookmark,
  Clock3,
  UserCheck,
  CheckCircle,
  AlertCircle,
  Info,
  Settings,
  BarChart3,
  PieChart,
  Activity,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Menu,
  Grid,
  List,
  Filter as FilterIcon,
  SortAsc,
  SortDesc,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Copy,
  Link as LinkIcon,
  Mail,
  Phone,
  MapPin,
  Globe,
  Building,
  Rocket,
  Globe2,
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  Lock,
  Unlock,
  Key,
  EyeOff,
  EyeOn,
  Camera,
  CameraOff,
  Microphone,
  MicrophoneOff,
  Volume2,
  VolumeX,
  Volume1,
  Volume,
  Mute,
  Unmute,
  PlayCircle,
  PauseCircle,
  StopCircle,
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
  PlaySquare,
  PauseSquare,
  StopSquare,
  PlayButton,
  PauseButton,
  StopButton,
  PlayIcon,
  PauseIcon,
  StopIcon,
  PlayIcon2,
  PauseIcon2,
  StopIcon2,
  PlayIcon3,
  PauseIcon3,
  StopIcon3,
  PlayIcon4,
  PauseIcon4,
  StopIcon4,
  PlayIcon5,
  PauseIcon5,
  StopIcon5,
  PlayIcon6,
  PauseIcon6,
  StopIcon6,
  PlayIcon7,
  PauseIcon7,
  StopIcon7,
  PlayIcon8,
  PauseIcon8,
  StopIcon8,
  PlayIcon9,
  PauseIcon9,
  StopIcon9,
  PlayIcon10,
  PauseIcon10,
  StopIcon10
} from 'lucide-react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const faqCategories = {
    general: {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with top AI and tech talent, services, and equipment in one comprehensive platform."
        },
        {
          question: "How does the AI talent matching work?",
          answer: "Our AI-powered matching system analyzes your project requirements, budget, and timeline to connect you with the most suitable tech professionals. The system considers skills, experience, availability, and past performance to ensure optimal matches."
        },
        {
          question: "What types of services do you offer?",
          answer: "We offer a wide range of services including AI development, software engineering, IT consulting, equipment rental, green IT solutions, and specialized tech services. Our marketplace covers everything from individual freelancers to enterprise solutions."
        },
        {
          question: "Is Zion Tech Group free to use?",
          answer: "Yes! Our core marketplace platform is completely free to use. We believe in democratizing access to tech talent and services. Some premium features and enterprise solutions may have associated costs."
        }
      ]
    },
    clients: {
      title: "For Clients & Employers",
      icon: Building,
      questions: [
        {
          question: "How do I get started as a client?",
          answer: "Simply create an account, post your project requirements, and our AI will match you with suitable talent. You can also browse our talent directory, equipment listings, and service categories to find what you need."
        },
        {
          question: "How do I find the right talent for my project?",
          answer: "You can search for talent using our AI-powered matching system, browse categories, or post a job listing. Our platform will suggest the best matches based on your requirements, budget, and timeline."
        },
        {
          question: "What services can I find on Zion?",
          answer: "Zion offers a wide range of services including AI development, web and mobile app development, data science, UI/UX design, IT consulting, equipment rentals, and specialized AI solutions for various industries."
        },
        {
          question: "How do I ensure quality when hiring talent?",
          answer: "All talent on Zion are verified professionals with portfolios, reviews, and ratings. You can review their work history, read client testimonials, and communicate directly before making a decision."
        }
      ]
    },
    talent: {
      title: "For Talent & Professionals",
      icon: Rocket,
      questions: [
        {
          question: "How do I join as a tech professional?",
          answer: "Create a profile highlighting your skills, experience, and portfolio. Our verification process ensures quality, and once approved, you'll start receiving project matches and can bid on opportunities."
        },
        {
          question: "How do I showcase my skills and experience?",
          answer: "Create a comprehensive profile highlighting your expertise, upload portfolio pieces, list your skills, and set your rates. You can also add certifications, education, and work samples to stand out."
        },
        {
          question: "How do I get paid for my work?",
          answer: "Zion offers secure payment processing with milestone-based payments. You can set up payment schedules, track project progress, and receive payments directly through our platform."
        },
        {
          question: "Can I work with international clients?",
          answer: "Absolutely! Zion is a global platform connecting talent and clients worldwide. You can work with clients from any country and expand your professional network internationally."
        }
      ]
    },
    marketplace: {
      title: "Marketplace & Services",
      icon: ShoppingCart,
      questions: [
        {
          question: "What can I buy in the marketplace?",
          answer: "Our marketplace includes AI services, software development, IT consulting, equipment rentals, specialized hardware, and more. We're constantly expanding our categories to meet your needs."
        },
        {
          question: "How do I request a quote?",
          answer: "Navigate to the 'Request Quote' page, fill out the form with your project requirements, and we'll connect you with qualified professionals who can provide detailed proposals."
        },
        {
          question: "Are there any guarantees on services?",
          answer: "Yes, we offer satisfaction guarantees and our dispute resolution system ensures fair outcomes. Most professionals also offer revisions and support to ensure your complete satisfaction."
        },
        {
          question: "What is the AI Matcher feature?",
          answer: "Our AI Matcher uses advanced algorithms to connect clients with the perfect talent based on project requirements, skills, availability, and budget. It saves time and ensures better matches."
        }
      ]
    },
    security: {
      title: "Security & Trust",
      icon: Shield,
      questions: [
        {
          question: "How does Zion protect my data and privacy?",
          answer: "We implement enterprise-grade security measures including encryption, secure payment processing, and strict privacy policies. Your data is never shared with third parties without consent."
        },
        {
          question: "What happens if there's a dispute with a client or talent?",
          answer: "Our dispute resolution system provides fair mediation for any conflicts. We review evidence from both parties and work to find a resolution that satisfies everyone involved."
        },
        {
          question: "How secure are payments on the platform?",
          answer: "All payments are processed through secure, encrypted channels with multiple layers of protection. We use industry-standard security protocols to ensure your financial information is safe."
        },
        {
          question: "What verification processes do you have?",
          answer: "We verify all talent through multiple steps including identity verification, skill assessments, portfolio reviews, and reference checks. This ensures quality and trust across our platform."
        }
      ]
    },
    support: {
      title: "Technical Support",
      icon: Cpu,
      questions: [
        {
          question: "What if I encounter technical issues?",
          answer: "Our support team is available 24/7. You can reach us through the contact form, email support@ziontechgroup.com, or use our live chat feature for immediate assistance."
        },
        {
          question: "How secure is my data?",
          answer: "We use enterprise-grade security measures including end-to-end encryption, secure payment processing, and strict data protection policies. Your privacy and security are our top priorities."
        },
        {
          question: "Can I use Zion Tech Group on mobile devices?",
          answer: "Absolutely! Our platform is fully responsive and works seamlessly on all devices. We also offer a dedicated mobile app for enhanced mobile experience."
        },
        {
          question: "Do you offer API access for integrations?",
          answer: "Yes, we provide comprehensive API access for enterprise clients who want to integrate our platform with their existing systems and workflows."
        }
      ]
    }
  };

  const categories = Object.keys(faqCategories);

  const filteredCategories = categories.filter(category => {
    const categoryData = faqCategories[category];
    const hasMatchingQuestions = categoryData.questions.some(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return searchTerm === '' || hasMatchingQuestions;
  });

  const toggleExpanded = (itemId) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
=======
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
    }
    setExpandedItems(newExpanded);
  };

<<<<<<< HEAD
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <HelpCircle className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about Zion Tech Group's platform, 
              services, and how to get started with our AI-powered marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Questions
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Answer
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Search through our comprehensive FAQ database to quickly find 
              answers to your questions about Zion Tech Group.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for answers to your questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark hover:text-white border border-zion-cyan/20'
                }`}
              >
                {faqCategories[category].title}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredCategories.map((category) => {
              const categoryData = faqCategories[category];
              const IconComponent = categoryData.icon;
              
              return (
                <motion.div 
                  key={category}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden"
                  variants={itemVariants}
                >
                  {/* Category Header */}
                  <div className="bg-zion-cyan/10 p-6 border-b border-zion-cyan/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{categoryData.title}</h2>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="divide-y divide-zion-cyan/20">
                    {categoryData.questions
                      .filter(q =>
                        searchTerm === '' ||
                        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((item, index) => {
                        const itemId = `${category}-${index}`;
                        const isExpanded = expandedItems.has(itemId);
                        
                        return (
                          <div key={index} className="p-6">
                            <button
                              onClick={() => toggleExpanded(itemId)}
                              className="w-full flex items-center justify-between text-left hover:text-zion-cyan transition-colors duration-300"
                            >
                              <h3 className="text-lg font-semibold text-white pr-4">
                                {item.question}
                              </h3>
                              <div className="flex-shrink-0">
                                {isExpanded ? (
                                  <ChevronUp className="w-5 h-5 text-zion-cyan" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-zion-slate-light" />
                                )}
                              </div>
                            </button>
                            
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4"
                              >
                                <p className="text-zion-slate-light leading-relaxed">
                                  {item.answer}
                                </p>
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help 
              with any questions or issues you may have.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Browse Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
=======
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
