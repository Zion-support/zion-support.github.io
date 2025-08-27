import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  Plus, 
  Minus,
  Brain,
  Shield,
  Cloud,
  Zap,
  Rocket,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  ShoppingCart,
  Settings,
  BookOpen,
  Briefcase,
  Target,
  Lightbulb,
  ShieldCheck,
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
  Activity,
  AlertTriangle,
  CheckSquare,
  Clock,
  DollarSign,
  Download,
  EyeOff,
  File,
  FileCheck,
  FileX,
  Filter,
  Flag,
  Folder,
  FolderOpen,
  Gift,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Github,
  Gitlab,
  Globe2,
  Hash,
  Headphones,
  HeartOff,
  HelpCircle2,
  Home,
  Image,
  Inbox,
  Info,
  Key,
  Layers,
  Layout,
  LifeBuoy,
  Link,
  Link2,
  List,
  Loader,
  Loader2,
  Lock2,
  Mail,
  MapPin,
  Maximize,
  Maximize2,
  Menu,
  MessageSquare,
  Mic,
  MicOff,
  Minimize,
  Minimize2,
  Monitor2,
  Moon,
  MoreHorizontal,
  MoreVertical,
  MousePointer,
  Move,
  Music,
  Navigation,
  Navigation2,
  Package,
  Paperclip,
  Pause,
  PauseCircle,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  PieChart,
  Play,
  PlayCircle,
  PlusCircle,
  PlusSquare,
  Pocket,
  Power,
  Printer,
  Radio,
  RefreshCw,
  RefreshCcw,
  Repeat,
  RotateCcw,
  RotateCw,
  Rss,
  Save,
  Scissors,
  Send,
  Server2,
  Settings2,
  Share,
  Share2,
  Shield2,
  ShieldOff,
  ShoppingBag,
  ShoppingCart2,
  Shuffle,
  Sidebar,
  SkipBack,
  SkipForward,
  Slash,
  Sliders,
  Smartphone2,
  Smile,
  Speaker,
  Square,
  Star2,
  StopCircle,
  Sun,
  Sunrise,
  Sunset,
  Tablet,
  Tag,
  Target2,
  Terminal,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  ToggleLeft,
  ToggleRight,
  Tool,
  Trash,
  Trash2,
  TrendingDown,
  TrendingUp2,
  Truck,
  Tv,
  Type,
  Umbrella,
  Underline,
  Unlock,
  Upload,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  Users2,
  Video2,
  VideoOff,
  Voicemail,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Watch,
  Wifi2,
  WifiOff,
  Wind,
  X,
  XCircle,
  XSquare,
  Youtube,
  Zap2,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqData = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      icon: Brain,
      questions: [
        {
          id: 1,
          question: 'What AI services does Zion Tech Group offer?',
          answer: 'We offer comprehensive AI services including machine learning model development, natural language processing, computer vision, predictive analytics, and AI-powered business process automation. Our solutions are tailored to your specific industry and business needs.'
        },
        {
          id: 2,
          question: 'How long does it take to implement AI solutions?',
          answer: 'Implementation timelines vary based on complexity. Simple AI integrations can take 4-8 weeks, while complex enterprise AI systems may take 3-6 months. We provide detailed project timelines during our initial consultation.'
        },
        {
          id: 3,
          question: 'Do you provide ongoing AI model maintenance?',
          answer: 'Yes, we offer comprehensive AI model maintenance including regular updates, performance monitoring, retraining, and optimization. This ensures your AI solutions continue to deliver optimal results as your business evolves.'
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Atom,
      questions: [
        {
          id: 4,
          question: 'What quantum computing solutions do you provide?',
          answer: 'We offer quantum algorithm development, quantum-classical hybrid systems, quantum simulation, and quantum machine learning solutions. Our team includes quantum physicists and engineers with expertise in current quantum technologies.'
        },
        {
          id: 5,
          question: 'Is quantum computing ready for business use?',
          answer: 'While full-scale quantum computing is still emerging, we provide quantum-ready solutions and hybrid approaches that combine quantum and classical computing for specific business applications like optimization and cryptography.'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      questions: [
        {
          id: 6,
          question: 'What cybersecurity services do you offer?',
          answer: 'Our cybersecurity services include threat assessment, penetration testing, security architecture design, incident response, compliance management, and ongoing security monitoring. We implement zero-trust security models and advanced threat protection.'
        },
        {
          id: 7,
          question: 'Do you help with compliance requirements?',
          answer: 'Yes, we assist with various compliance frameworks including SOC 2, ISO 27001, GDPR, HIPAA, and industry-specific regulations. Our team ensures your security measures meet all necessary compliance standards.'
        }
      ]
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      questions: [
        {
          id: 8,
          question: 'Which cloud platforms do you work with?',
          answer: 'We work with all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud solutions. We help you choose the best platform for your needs and optimize your cloud infrastructure for cost and performance.'
        },
        {
          id: 9,
          question: 'Do you provide cloud migration services?',
          answer: 'Yes, we offer comprehensive cloud migration services including assessment, planning, migration execution, and post-migration optimization. We ensure minimal downtime and risk during the migration process.'
        }
      ]
    },
    {
      id: 'pricing',
      title: 'Pricing & Packages',
      icon: DollarSign,
      questions: [
        {
          id: 10,
          question: 'How do you structure your pricing?',
          answer: 'We offer flexible pricing models including project-based pricing, retainer agreements, and subscription services. Pricing depends on project scope, complexity, and ongoing support requirements. We provide detailed quotes after understanding your needs.'
        },
        {
          id: 11,
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans and can structure payments to align with project milestones. We also provide financing options for larger projects to help manage cash flow.'
        }
      ]
    },
    {
      id: 'support',
      title: 'Support & Maintenance',
      icon: LifeBuoy,
      questions: [
        {
          id: 12,
          question: 'What support options do you provide?',
          answer: 'We offer 24/7 technical support, regular maintenance schedules, performance monitoring, and proactive issue resolution. Our support team includes the same engineers who built your solutions for optimal problem resolution.'
        },
        {
          id: 13,
          question: 'Do you provide training for our team?',
          answer: 'Yes, we provide comprehensive training for your team on all implemented solutions. This includes user training, administrator training, and ongoing support to ensure your team can effectively use and maintain the systems.'
        }
      ]
    }
  ];

  const toggleItem = (itemId: number) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return faqData;
    
    return faqData.map(category => ({
      ...category,
      questions: category.questions.filter(q =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.questions.length > 0);
  }, [searchQuery]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HelpCircle className="w-20 h-20 text-zion-cyan mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Frequently Asked <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Find answers to common questions about our services, pricing, and how we can help transform your business.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zion-slate-dark/30 transition-colors duration-300"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openItems.includes(item.id) ? (
                          <Minus className="w-5 h-5 text-zion-cyan" />
                        ) : (
                          <Plus className="w-5 h-5 text-zion-cyan" />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openItems.includes(item.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-zion-slate-light leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Our team of experts is here to help. Get in touch with us for personalized assistance and detailed information about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-dark transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
