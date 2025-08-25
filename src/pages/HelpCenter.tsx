import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Globe, 
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
  Settings,
  Shield,
  Zap,
  Brain,
  Cpu,
  Building,
  Rocket
} from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      description: 'Essential information to begin your journey with Zion Tech Group',
      articles: [
        {
          title: 'How to Get Started with Our Services',
          description: 'Step-by-step guide to begin using our technology solutions',
          path: '/help/getting-started',
          type: 'guide'
        },
        {
          title: 'Account Setup and Configuration',
          description: 'Complete guide to setting up your account and initial configuration',
          path: '/help/account-setup',
          type: 'guide'
        },
        {
          title: 'First Steps with AI Solutions',
          description: 'Quick start guide for AI-powered services and tools',
          path: '/help/ai-first-steps',
          type: 'guide'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Support for AI-powered services and autonomous systems',
      articles: [
        {
          title: 'AI Autonomous Systems Guide',
          description: 'Complete guide to using our AI autonomous systems',
          path: '/help/ai-autonomous-systems',
          type: 'guide'
        },
        {
          title: 'AI Research Assistant Tutorial',
          description: 'How to effectively use our AI research assistant',
          path: '/help/ai-research-assistant',
          type: 'tutorial'
        },
        {
          title: 'Machine Learning Model Training',
          description: 'Best practices for training and deploying ML models',
          path: '/help/ml-training',
          type: 'guide'
        }
      ]
    },
    {
      id: 'quantum-technology',
      title: 'Quantum Technology',
      icon: Zap,
      description: 'Support for quantum computing and neural network platforms',
      articles: [
        {
          title: 'Quantum Neural Network Platform Guide',
          description: 'Understanding and using our quantum neural network platform',
          path: '/help/quantum-neural-networks',
          type: 'guide'
        },
        {
          title: 'Quantum Computing Basics',
          description: 'Introduction to quantum computing concepts and applications',
          path: '/help/quantum-basics',
          type: 'tutorial'
        },
        {
          title: 'Quantum-Safe Security Implementation',
          description: 'Implementing quantum-resistant security measures',
          path: '/help/quantum-security',
          type: 'guide'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      description: 'Security services and compliance automation support',
      articles: [
        {
          title: 'SOC2 Compliance Automation Guide',
          description: 'Automating your SOC2 compliance process',
          path: '/help/soc2-compliance',
          type: 'guide'
        },
        {
          title: 'Cybersecurity Best Practices',
          description: 'Essential security practices for your organization',
          path: '/help/cybersecurity-best-practices',
          type: 'guide'
        },
        {
          title: 'Threat Detection and Response',
          description: 'Understanding our threat detection capabilities',
          path: '/help/threat-detection',
          type: 'guide'
        }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      description: 'Cloud services, DevOps, and infrastructure management',
      articles: [
        {
          title: 'Cloud Migration Guide',
          description: 'Step-by-step cloud migration process',
          path: '/help/cloud-migration',
          type: 'guide'
        },
        {
          title: 'DevOps Automation Setup',
          description: 'Setting up automated DevOps pipelines',
          path: '/help/devops-automation',
          type: 'tutorial'
        },
        {
          title: '5G Enterprise Solutions',
          description: 'Implementing 5G enterprise network solutions',
          path: '/help/5g-solutions',
          type: 'guide'
        }
      ]
    },
    {
      id: 'business-operations',
      title: 'Business Operations',
      icon: Building,
      description: 'Business process automation and operations platforms',
      articles: [
        {
          title: 'Autonomous Business Operations',
          description: 'Setting up autonomous business process automation',
          path: '/help/autonomous-business',
          type: 'guide'
        },
        {
          title: 'AI Asset Management',
          description: 'Managing IT assets with AI-powered tools',
          path: '/help/ai-asset-management',
          type: 'guide'
        },
        {
          title: 'Business Intelligence Dashboard',
          description: 'Using our BI and analytics dashboard',
          path: '/help/bi-dashboard',
          type: 'tutorial'
        }
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Contact Support',
      description: 'Get help from our expert support team',
      icon: MessageCircle,
      action: '/contact',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Documentation',
      description: 'Browse our comprehensive documentation',
      icon: BookOpen,
      action: '/docs',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides',
      icon: Video,
      action: '/tutorials',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Download Resources',
      description: 'Access downloadable guides and templates',
      icon: Download,
      action: '/resources',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your organization.'
    },
    {
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including autonomous systems, research assistants, business intelligence, marketing automation, HR solutions, legal tech, and healthcare analytics. Each service is customized to meet your specific requirements.'
    },
    {
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including SOC2 compliance automation, quantum-safe encryption, and AI-powered threat detection. All solutions follow industry best practices and compliance standards.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We provide 24/7 support for all our services. Our team of experts is always available to help with technical issues, questions, and optimization recommendations.'
    },
    {
      question: 'Can you customize solutions for our industry?',
      answer: 'Absolutely! We specialize in industry-specific solutions for healthcare, finance, manufacturing, retail, and more. Our team works closely with you to understand your industry challenges and create tailored solutions.'
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-cyan-400 mr-3" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Help Center
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Find answers, tutorials, and support resources to help you succeed with Zion Tech Group solutions
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, and guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.action}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                <p className="text-gray-400 text-sm">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Help Categories</h2>
          <div className="space-y-6">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  {expandedCategories.includes(category.id) ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                
                {expandedCategories.includes(category.id) && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                      {category.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.path}
                          className="p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-300 border border-gray-600 hover:border-cyan-500"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              article.type === 'guide' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                              article.type === 'tutorial' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                              'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                            }`}>
                              {article.type}
                            </span>
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                          </div>
                          <h4 className="font-semibold text-white mb-2">{article.title}</h4>
                          <p className="text-gray-400 text-sm">{article.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start">
                  <Info className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-300 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert support team is here to help you succeed with our technology solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center p-4 bg-gray-700/50 rounded-lg">
                <Phone className="w-6 h-6 text-cyan-400 mr-3" />
                <div className="text-left">
                  <p className="text-white font-semibold">Call Us</p>
                  <p className="text-gray-400 text-sm">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-700/50 rounded-lg">
                <Mail className="w-6 h-6 text-green-400 mr-3" />
                <div className="text-left">
                  <p className="text-white font-semibold">Email Support</p>
                  <p className="text-gray-400 text-sm">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-700/50 rounded-lg">
                <MessageCircle className="w-6 h-6 text-purple-400 mr-3" />
                <div className="text-left">
                  <p className="text-white font-semibold">Live Chat</p>
                  <p className="text-gray-400 text-sm">Available 24/7</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 border border-gray-600"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
