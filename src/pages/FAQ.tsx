import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronRight, 
  Brain, 
  Server, 
  Shield, 
  Cloud, 
  Users, 
  Globe, 
  FileText, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  Zap,
  Database,
  Network,
  Lock,
  BarChart3,
  Cpu,
  Workflow,
  Atom,
  Satellite,
  Rocket,
  Target,
  Building,
  ShoppingCart,
  BookOpen,
  GraduationCap,
  LifeBuoy,
  Headphones,
  MessageSquare,
  Download,
  Play,
  Book,
  Code,
  Palette,
  Camera,
  Video,
  Music,
  File,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy,
  Share,
  Bookmark,
  Flag,
  Report,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Heart,
  Gift,
  CreditCard,
  Wallet,
  Receipt,
  Calculator,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  ScatterChart,
  Radar,
  Gauge,
  Thermometer,
  Droplets,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Wind,
  Umbrella,
  Snowflake,
  Fire,
  Leaf,
  Tree,
  Flower,
  Seedling,
  Sprout,
  Plant,
  TreePine,
  Mountain,
  MountainSnow,
  Volcano,
  Island,
  Beach,
  Desert,
  Forest,
  Jungle,
  Ocean,
  River,
  Lake,
  Water,
  Fish,
  Bird,
  Cat,
  Dog,
  Horse,
  Cow,
  Pig,
  Sheep,
  Goat,
  Chicken,
  Duck,
  Turkey,
  Eagle,
  Hawk,
  Owl,
  Crow,
  Sparrow,
  Robin,
  Bluebird,
  Cardinal,
  Goldfinch,
  Hummingbird,
  Woodpecker,
  Seagull,
  Pelican,
  Flamingo,
  Penguin,
  Ostrich,
  Emu,
  Kiwi,
  Toucan,
  Parrot,
  Macaw,
  Cockatoo,
  Canary,
  Finch
} from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, count: 85 },
    { id: 'general', name: 'General', icon: Info, count: 15 },
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: 20 },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Server, count: 12 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 10 },
    { id: 'cloud-solutions', name: 'Cloud Solutions', icon: Cloud, count: 8 },
    { id: 'billing', name: 'Billing & Pricing', icon: FileText, count: 8 },
    { id: 'technical', name: 'Technical Support', icon: Settings, count: 12 }
  ];

  const faqs = [
    // General Questions
    {
      id: 'what-is-zion-tech-group',
      question: 'What is Zion Tech Group?',
      answer: 'Zion Tech Group is a leading technology company specializing in AI-powered solutions, IT infrastructure, cybersecurity, and cloud services. We help businesses transform their operations through cutting-edge technology and innovative solutions.',
      category: 'general',
      tags: ['company', 'overview', 'introduction']
    },
    {
      id: 'where-are-you-located',
      question: 'Where are you located?',
      answer: 'Zion Tech Group is headquartered in the United States with offices in major technology hubs. We serve clients globally and have a distributed team of experts working remotely to provide 24/7 support.',
      category: 'general',
      tags: ['location', 'offices', 'global']
    },
    {
      id: 'industries-served',
      question: 'What industries do you serve?',
      answer: 'We serve clients across all industries including healthcare, finance, manufacturing, retail, education, government, and more. Our AI solutions are adaptable to any sector and can be customized for specific industry requirements.',
      category: 'general',
      tags: ['industries', 'sectors', 'clients']
    },
    {
      id: 'company-size',
      question: 'How large is your company?',
      answer: 'Zion Tech Group is a growing company with a team of experienced professionals, including AI engineers, cybersecurity experts, cloud architects, and business consultants. We maintain a lean, agile structure to provide personalized service.',
      category: 'general',
      tags: ['company', 'size', 'team']
    },
    {
      id: 'partnerships',
      question: 'Do you work with partners?',
      answer: 'Yes, we actively collaborate with technology partners, system integrators, and consulting firms to deliver comprehensive solutions. We also have strategic partnerships with major cloud providers and technology vendors.',
      category: 'general',
      tags: ['partnerships', 'collaboration', 'ecosystem']
    },

    // AI Services
    {
      id: 'ai-solutions-overview',
      question: 'What AI solutions do you offer?',
      answer: 'We offer comprehensive AI solutions including machine learning, natural language processing, computer vision, predictive analytics, process automation, and custom AI development. Our solutions are designed to drive real business value and ROI.',
      category: 'ai-services',
      tags: ['ai', 'machine-learning', 'automation', 'analytics']
    },
    {
      id: 'ai-implementation-time',
      question: 'How long does AI implementation take?',
      answer: 'AI implementation timelines vary based on complexity. Simple automation projects can be completed in 2-4 weeks, while comprehensive AI platforms may take 3-6 months. We provide detailed timelines during the planning phase.',
      category: 'ai-services',
      tags: ['ai', 'implementation', 'timeline', 'planning']
    },
    {
      id: 'ai-custom-development',
      question: 'Can you create custom AI solutions?',
      answer: 'Absolutely! We specialize in custom AI development tailored to your specific business needs. Our team works closely with you to understand your requirements and develop solutions that integrate seamlessly with your existing systems.',
      category: 'ai-services',
      tags: ['ai', 'custom', 'development', 'integration']
    },
    {
      id: 'ai-training-data',
      question: 'What about training data requirements?',
      answer: 'We can work with various data scenarios - from well-structured datasets to limited or unstructured data. We use techniques like transfer learning, data augmentation, and synthetic data generation to optimize AI performance.',
      category: 'ai-services',
      tags: ['ai', 'training', 'data', 'machine-learning']
    },
    {
      id: 'ai-maintenance',
      question: 'How do you maintain and update AI models?',
      answer: 'We provide ongoing AI model maintenance including performance monitoring, retraining, updates, and optimization. Our platform includes automated monitoring and alerting to ensure your AI solutions continue performing optimally.',
      category: 'ai-services',
      tags: ['ai', 'maintenance', 'monitoring', 'updates']
    },

    // IT Infrastructure
    {
      id: 'infrastructure-services',
      question: 'What IT infrastructure services do you provide?',
      answer: 'Our infrastructure services include cloud migration, DevOps automation, infrastructure as code, network design, data center optimization, and hybrid cloud solutions. We help modernize and scale your technology foundation.',
      category: 'it-infrastructure',
      tags: ['infrastructure', 'cloud', 'devops', 'networking']
    },
    {
      id: 'cloud-migration-process',
      question: 'What is your cloud migration process?',
      answer: 'Our proven migration process includes assessment, planning, preparation, migration execution, validation, and optimization. We ensure minimal downtime and provide comprehensive testing and rollback procedures.',
      category: 'it-infrastructure',
      tags: ['cloud', 'migration', 'process', 'planning']
    },
    {
      id: 'devops-automation',
      question: 'How do you implement DevOps automation?',
      answer: 'We implement DevOps automation through CI/CD pipelines, infrastructure as code, automated testing, monitoring, and deployment strategies. Our approach focuses on collaboration, automation, and continuous improvement.',
      category: 'it-infrastructure',
      tags: ['devops', 'automation', 'ci-cd', 'infrastructure']
    },
    {
      id: 'hybrid-cloud',
      question: 'Do you support hybrid cloud environments?',
      answer: 'Yes, we specialize in hybrid cloud solutions that combine on-premises infrastructure with public and private cloud services. This approach provides flexibility, cost optimization, and security while maintaining control over critical data.',
      category: 'it-infrastructure',
      tags: ['hybrid-cloud', 'on-premises', 'flexibility', 'security']
    },

    // Cybersecurity
    {
      id: 'security-services',
      question: 'What cybersecurity services do you offer?',
      answer: 'Our cybersecurity services include threat detection, vulnerability assessment, penetration testing, security monitoring, incident response, compliance management, and security awareness training. We provide comprehensive protection for your digital assets.',
      category: 'cybersecurity',
      tags: ['cybersecurity', 'threat-detection', 'compliance', 'training']
    },
    {
      id: 'security-compliance',
      question: 'What compliance standards do you support?',
      answer: 'We support major compliance standards including SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS, and industry-specific regulations. Our security solutions are designed to meet and exceed compliance requirements.',
      category: 'cybersecurity',
      tags: ['compliance', 'soc2', 'iso27001', 'gdpr', 'hipaa']
    },
    {
      id: 'incident-response',
      question: 'How do you handle security incidents?',
      answer: 'We provide 24/7 security monitoring and incident response services. Our team follows industry-standard incident response procedures including detection, analysis, containment, eradication, recovery, and lessons learned.',
      category: 'cybersecurity',
      tags: ['incident-response', 'monitoring', '24-7', 'procedures']
    },
    {
      id: 'security-training',
      question: 'Do you provide security training?',
      answer: 'Yes, we offer comprehensive security awareness training for your team, including phishing simulations, best practices, policy development, and ongoing education to create a security-conscious culture.',
      category: 'cybersecurity',
      tags: ['training', 'awareness', 'phishing', 'culture']
    },

    // Cloud Solutions
    {
      id: 'cloud-providers',
      question: 'Which cloud providers do you work with?',
      answer: 'We work with all major cloud providers including AWS, Azure, Google Cloud, and specialized providers. We help you choose the best platform for your needs and can manage multi-cloud environments for optimal performance and cost.',
      category: 'cloud-solutions',
      tags: ['cloud', 'aws', 'azure', 'gcp', 'multi-cloud']
    },
    {
      id: 'cloud-cost-optimization',
      question: 'How do you optimize cloud costs?',
      answer: 'We implement cloud cost optimization strategies including resource right-sizing, reserved instances, auto-scaling, cost monitoring, and FinOps practices. Our goal is to maximize value while minimizing unnecessary expenses.',
      category: 'cloud-solutions',
      tags: ['cloud', 'cost-optimization', 'finops', 'monitoring']
    },
    {
      id: 'cloud-security',
      question: 'How do you ensure cloud security?',
      answer: 'We implement comprehensive cloud security including identity and access management, data encryption, network security, monitoring, and compliance controls. We follow security best practices and provide ongoing security assessments.',
      category: 'cloud-solutions',
      tags: ['cloud', 'security', 'iam', 'encryption', 'monitoring']
    },

    // Billing & Pricing
    {
      id: 'pricing-structure',
      question: 'How does your pricing work?',
      answer: 'Our pricing is based on the specific services and solutions you need. We offer flexible pricing models including subscription-based services, project-based pricing, and enterprise agreements. Contact us for a customized quote.',
      category: 'billing',
      tags: ['pricing', 'subscription', 'project-based', 'enterprise']
    },
    {
      id: 'payment-methods',
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit cards, bank transfers, and invoicing for enterprise clients. We can work with your existing procurement processes and provide flexible payment terms.',
      category: 'billing',
      tags: ['payment', 'credit-cards', 'bank-transfer', 'invoicing']
    },
    {
      id: 'contract-terms',
      question: 'What are your contract terms?',
      answer: 'We offer flexible contract terms from month-to-month agreements to multi-year contracts. We can customize terms based on your needs and provide options for scaling services up or down as your business evolves.',
      category: 'billing',
      tags: ['contracts', 'terms', 'flexibility', 'scaling']
    },

    // Technical Support
    {
      id: 'support-hours',
      question: 'What are your support hours?',
      answer: 'We provide 24/7 technical support for critical issues and business hours support (8 AM - 8 PM EST) for general inquiries. Enterprise customers receive priority support with dedicated account managers.',
      category: 'technical',
      tags: ['support', '24-7', 'business-hours', 'enterprise']
    },
    {
      id: 'response-times',
      question: 'What are your response times?',
      answer: 'Critical issues receive immediate attention, high-priority issues within 2 hours, and standard issues within 24 hours. Enterprise customers have guaranteed response time SLAs based on their support plan.',
      category: 'technical',
      tags: ['response-times', 'slas', 'priority', 'enterprise']
    },
    {
      id: 'support-channels',
      question: 'What support channels do you offer?',
      answer: 'We offer multiple support channels including phone, email, live chat, support tickets, and dedicated support portals. Enterprise customers also have access to dedicated account managers and priority support lines.',
      category: 'technical',
      tags: ['support-channels', 'phone', 'email', 'chat', 'tickets']
    },
    {
      id: 'documentation',
      question: 'Do you provide documentation?',
      answer: 'Yes, we provide comprehensive documentation including user guides, API documentation, best practices, and video tutorials. Our documentation is regularly updated and available through our customer portal.',
      category: 'technical',
      tags: ['documentation', 'guides', 'api', 'tutorials', 'portal']
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs(prev =>
      prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : HelpCircle;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
                <HelpCircle className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Find quick answers to common questions about our services, solutions, and how we can help 
              transform your business with cutting-edge technology.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search for answers to your questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-16 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg'
                    : 'bg-zion-slate-dark/50 border border-zion-purple/30 text-zion-slate-light hover:bg-zion-purple/20 hover:text-zion-cyan'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                <span className="text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">No questions found</h3>
                <p className="text-zion-slate-light">Try adjusting your search criteria or browse all categories.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map(faq => (
                  <div key={faq.id} className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zion-purple/10 transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full font-medium">
                          {getCategoryName(faq.category)}
                        </span>
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      </div>
                      {expandedFaqs.includes(faq.id) ? (
                        <ChevronDown className="w-5 h-5 text-zion-cyan" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-zion-slate-light" />
                      )}
                    </button>
                    
                    {expandedFaqs.includes(faq.id) && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-zion-purple/20 pt-4">
                          <p className="text-zion-slate-light leading-relaxed mb-4">{faq.answer}</p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {faq.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Still Need Help */}
      <div className="py-24 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Live Chat</h3>
              <p className="text-zion-slate-light mb-6">
                Chat with our support team in real-time for immediate assistance.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300">
                Start Chat
              </button>
            </div>

            <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Phone Support</h3>
              <p className="text-zion-slate-light mb-6">
                Call our support team for personalized assistance and guidance.
              </p>
              <a
                href="tel:+1-800-ZION-TECH"
                className="inline-block px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300"
              >
                Call Now
              </a>
            </div>

            <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <LifeBuoy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Support Ticket</h3>
              <p className="text-zion-slate-light mb-6">
                Submit a detailed support ticket for complex issues or requests.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-zion-blue to-zion-purple text-white font-semibold rounded-lg hover:from-zion-blue-light hover:to-zion-purple-light transition-all duration-300"
              >
                Submit Ticket
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust Zion Tech Group for their technology needs. 
              Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-started"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-purple text-zion-purple font-semibold rounded-xl hover:bg-zion-purple hover:text-white transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
