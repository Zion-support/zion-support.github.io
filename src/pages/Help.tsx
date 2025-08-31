import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  Download, 
  ExternalLink,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  Users,
  Globe,
  Zap,
  Shield,
  Cloud,
  Brain,
  Server,
  Database,
  Network,
  Lock,
  ArrowRight,
  Star,
  Clock,
  Calendar,
  MapPin,
  MessageSquare,
  Headphones,
  LifeBuoy,
  Book,
  GraduationCap,
  Play,
  Pause,
  SkipForward,
  Volume2,
  Maximize2,
  Settings,
  Download as DownloadIcon,
  Share2,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Send,
  Bot,
  User,
  Tag,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('getting-started');

  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, count: 150 },
    { id: 'getting-started', name: 'Getting Started', icon: BookOpen, count: 25 },
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: 30 },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Server, count: 20 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 15 },
    { id: 'cloud-solutions', name: 'Cloud Solutions', icon: Cloud, count: 18 },
    { id: 'billing', name: 'Billing & Pricing', icon: FileText, count: 12 },
    { id: 'technical', name: 'Technical Support', icon: Settings, count: 30 }
  ];

  const helpArticles = [
    {
      id: 'getting-started-guide',
      title: 'Getting Started with Zion Tech Group',
      category: 'getting-started',
      description: 'Complete guide to setting up your account and getting started with our services.',
      content: `
        <h3>Welcome to Zion Tech Group!</h3>
        <p>This guide will help you get started with our comprehensive technology solutions.</p>
        
        <h4>Step 1: Account Setup</h4>
        <ul>
          <li>Create your account at <a href="/signup">ziontechgroup.com/signup</a></li>
          <li>Verify your email address</li>
          <li>Complete your company profile</li>
        </ul>
        
        <h4>Step 2: Choose Your Services</h4>
        <ul>
          <li>Browse our <a href="/services">service catalog</a></li>
          <li>Schedule a consultation with our experts</li>
          <li>Get a customized quote for your needs</li>
        </ul>
        
        <h4>Step 3: Implementation</h4>
        <ul>
          <li>Our team will guide you through the setup process</li>
          <li>Receive comprehensive training and documentation</li>
          <li>Get ongoing support and optimization</li>
        </ul>
      `,
      tags: ['setup', 'onboarding', 'account', 'beginner'],
      readTime: '5 min read',
      lastUpdated: '2024-01-15',
      helpful: 127,
      notHelpful: 3
    },
    {
      id: 'ai-automation-setup',
      title: 'Setting Up AI Automation Services',
      category: 'ai-services',
      description: 'Learn how to configure and deploy AI automation solutions for your business.',
      content: `
        <h3>AI Automation Setup Guide</h3>
        <p>Transform your business processes with intelligent automation powered by AI.</p>
        
        <h4>Prerequisites</h4>
        <ul>
          <li>Active Zion Tech Group account</li>
          <li>Business process documentation</li>
          <li>Data access permissions</li>
        </ul>
        
        <h4>Configuration Steps</h4>
        <ol>
          <li>Define your automation goals and KPIs</li>
          <li>Map out current business processes</li>
          <li>Identify automation opportunities</li>
          <li>Configure AI models and parameters</li>
          <li>Test in development environment</li>
          <li>Deploy to production with monitoring</li>
        </ol>
        
        <h4>Best Practices</h4>
        <ul>
          <li>Start with high-impact, low-risk processes</li>
          <li>Ensure data quality and consistency</li>
          <li>Monitor performance and iterate</li>
          <li>Train your team on new workflows</li>
        </ul>
      `,
      tags: ['ai', 'automation', 'setup', 'configuration'],
      readTime: '8 min read',
      lastUpdated: '2024-01-10',
      helpful: 89,
      notHelpful: 2
    },
    {
      id: 'cloud-migration-guide',
      title: 'Cloud Migration Best Practices',
      category: 'cloud-solutions',
      description: 'Comprehensive guide to migrating your infrastructure to the cloud safely and efficiently.',
      content: `
        <h3>Cloud Migration Strategy</h3>
        <p>Successfully migrate your infrastructure with our proven methodology.</p>
        
        <h4>Migration Phases</h4>
        <ol>
          <li><strong>Assessment:</strong> Evaluate current infrastructure and identify migration candidates</li>
          <li><strong>Planning:</strong> Design target architecture and migration roadmap</li>
          <li><strong>Preparation:</strong> Set up target environment and prepare applications</li>
          <li><strong>Migration:</strong> Execute migration with minimal downtime</li>
          <li><strong>Validation:</strong> Test functionality and performance</li>
          <li><strong>Optimization:</strong> Fine-tune and optimize cloud resources</li>
        </ol>
        
        <h4>Key Considerations</h4>
        <ul>
          <li>Security and compliance requirements</li>
          <li>Data backup and recovery strategies</li>
          <li>Network connectivity and latency</li>
          <li>Cost optimization and resource management</li>
          <li>Staff training and change management</li>
        </ul>
      `,
      tags: ['cloud', 'migration', 'infrastructure', 'best-practices'],
      readTime: '12 min read',
      lastUpdated: '2024-01-08',
      helpful: 156,
      notHelpful: 5
    },
    {
      id: 'cybersecurity-implementation',
      title: 'Implementing Cybersecurity Solutions',
      category: 'cybersecurity',
      description: 'Step-by-step guide to implementing comprehensive cybersecurity measures for your organization.',
      content: `
        <h3>Cybersecurity Implementation Guide</h3>
        <p>Protect your organization with enterprise-grade security solutions.</p>
        
        <h4>Security Framework</h4>
        <ul>
          <li><strong>Perimeter Security:</strong> Firewalls, IDS/IPS, and network segmentation</li>
          <li><strong>Endpoint Protection:</strong> Antivirus, EDR, and device management</li>
          <li><strong>Identity & Access:</strong> MFA, SSO, and privileged access management</li>
          <li><strong>Data Protection:</strong> Encryption, DLP, and backup strategies</li>
          <li><strong>Monitoring & Response:</strong> SIEM, SOC, and incident response</li>
        </ul>
        
        <h4>Implementation Timeline</h4>
        <ul>
          <li>Week 1-2: Security assessment and planning</li>
          <li>Week 3-4: Core security infrastructure deployment</li>
          <li>Week 5-6: Security tools configuration and testing</li>
          <li>Week 7-8: Staff training and policy implementation</li>
          <li>Week 9-10: Monitoring setup and optimization</li>
        </ul>
      `,
      tags: ['cybersecurity', 'security', 'implementation', 'protection'],
      readTime: '10 min read',
      lastUpdated: '2024-01-05',
      helpful: 203,
      notHelpful: 4
    }
  ];

  const faqs = [
    {
      id: 'pricing',
      question: 'How does Zion Tech Group pricing work?',
      answer: 'Our pricing is based on the specific services and solutions you need. We offer flexible pricing models including subscription-based services, project-based pricing, and enterprise agreements. Contact our sales team for a customized quote based on your requirements.',
      category: 'billing'
    },
    {
      id: 'support-hours',
      question: 'What are your support hours?',
      answer: 'We provide 24/7 technical support for critical issues and business hours support (8 AM - 8 PM EST) for general inquiries. Enterprise customers receive priority support with dedicated account managers.',
      category: 'technical'
    },
    {
      id: 'implementation-time',
      question: 'How long does implementation take?',
      answer: 'Implementation time varies depending on the complexity of your project. Simple AI automation projects can be completed in 2-4 weeks, while comprehensive infrastructure transformations may take 3-6 months. We\'ll provide a detailed timeline during the planning phase.',
      category: 'getting-started'
    },
    {
      id: 'data-security',
      question: 'How do you ensure data security?',
      answer: 'We implement enterprise-grade security measures including end-to-end encryption, SOC 2 Type II compliance, regular security audits, and adherence to industry best practices. Your data is protected with multiple layers of security and compliance.',
      category: 'cybersecurity'
    },
    {
      id: 'custom-solutions',
      question: 'Can you create custom solutions?',
      answer: 'Absolutely! We specialize in creating custom AI solutions and technology implementations tailored to your specific business needs. Our team works closely with you to understand your requirements and develop solutions that drive real business value.',
      category: 'ai-services'
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
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
              How Can We Help?
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Find answers to your questions, learn how to use our services, and get the support you need 
              to succeed with Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="py-16 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/contact"
              className="group bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Contact Support</h3>
              <p className="text-zion-slate-light text-sm">Get help from our expert team</p>
            </Link>

            <Link
              to="/request-quote"
              className="group bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Get a Quote</h3>
              <p className="text-zion-slate-light text-sm">Request pricing for our services</p>
            </Link>

            <a
              href="tel:+1-800-ZION-TECH"
              className="group bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light text-sm">Speak with our team directly</p>
            </a>

            <a
              href="mailto:support@ziontechgroup.com"
              className="group bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-zion-slate-light text-sm">Send us a detailed message</p>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                            : 'text-zion-slate-light hover:bg-zion-purple/20 hover:text-zion-cyan'
                        }`}
                      >
                        <category.icon className="w-4 h-4" />
                        <span className="text-sm">{category.name}</span>
                        <span className="ml-auto text-xs opacity-75">({category.count})</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['getting-started', 'ai-services', 'it-infrastructure', 'cybersecurity', 'cloud-solutions', 'billing', 'technical'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                        : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-purple/20 hover:text-zion-cyan'
                    }`}
                  >
                    {getCategoryName(tab)}
                  </button>
                ))}
              </div>

              {/* Help Articles */}
              <div className="space-y-6">
                {filteredArticles.length === 0 ? (
                  <div className="text-center py-16">
                    <Search className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-white mb-2">No articles found</h3>
                    <p className="text-zion-slate-light">Try adjusting your search criteria or browse all categories.</p>
                  </div>
                ) : (
                  filteredArticles.map(article => (
                    <div key={article.id} className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full font-medium">
                              {getCategoryName(article.category)}
                            </span>
                            <span className="text-zion-slate-light text-sm">{article.readTime}</span>
                            <span className="text-zion-slate-light text-sm">Updated {article.lastUpdated}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                          <p className="text-zion-slate-light mb-4">{article.description}</p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Article Content */}
                      <div 
                        className="prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                      />

                      {/* Article Footer */}
                      <div className="border-t border-zion-purple/20 pt-4 mt-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm">
                            <button className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                              <ThumbsUp className="w-4 h-4" />
                              <span>Helpful ({article.helpful})</span>
                            </button>
                            <button className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                              <ThumbsDown className="w-4 h-4" />
                              <span>Not Helpful ({article.notHelpful})</span>
                            </button>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                              <Bookmark className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                              <Share2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find quick answers to common questions about our services and solutions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map(faq => (
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
                  {expandedFaq === faq.id ? (
                    <ChevronDown className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-zion-slate-light" />
                  )}
                </button>
                
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-zion-purple/20 pt-4">
                      <p className="text-zion-slate-light leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our support team is here to help you succeed with Zion Tech Group
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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