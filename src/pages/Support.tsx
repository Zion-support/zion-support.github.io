<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Headphones, 
  MessageCircle, 
  FileText, 
  Video, 
  Search, 
  Mail, 
  Phone, 
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Download,
  ExternalLink
} from 'lucide-react';

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      id: 'technical',
      name: 'Technical Support',
      icon: Headphones,
      description: 'Get help with technical issues and product support',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'billing',
      name: 'Billing & Account',
      icon: FileText,
      description: 'Questions about billing, invoices, and account management',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'training',
      name: 'Training & Documentation',
      icon: BookOpen,
      description: 'Access training materials and product documentation',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'integration',
      name: 'Integration Support',
      icon: MessageCircle,
      description: 'Help with API integration and third-party services',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqItems = [
    {
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business.",
      category: 'general'
    },
    {
      question: "What are your response times for support requests?",
      answer: "We prioritize support based on urgency. Critical issues receive immediate attention (within 1 hour), high priority issues within 4 hours, and standard requests within 24 hours during business hours.",
      category: 'technical'
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes, we offer 24/7 support for critical infrastructure and enterprise clients. Standard support is available Monday-Friday, 9 AM - 6 PM EST.",
      category: 'technical'
    },
    {
      question: "How can I access product documentation?",
      answer: "Product documentation is available in our Help Center and Developer Portal. You can also request specific documentation by contacting our support team.",
      category: 'training'
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients. All payments are processed securely.",
      category: 'billing'
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Users,
  FileText,
  Video,
  Calendar,
  MapPin,
  Globe,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  XCircle,
  Star,
  Rocket,
  Brain,
  Shield
} from 'lucide-react';

const Support = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const supportCategories = [
    {
      id: 'general',
      title: 'General Support',
      icon: Users,
      description: 'General questions and account support',
      priority: 'medium',
      responseTime: '2-4 hours'
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: FileText,
      description: 'Technical issues and troubleshooting',
      priority: 'high',
      responseTime: '1-2 hours'
    },
    {
      id: 'billing',
      title: 'Billing Support',
      icon: CheckCircle,
      description: 'Billing, payments, and subscription issues',
      priority: 'high',
      responseTime: '1-2 hours'
    },
    {
      id: 'ai-services',
      title: 'AI Services Support',
      icon: Brain,
      description: 'AI and machine learning service support',
      priority: 'high',
      responseTime: '1-3 hours'
    },
    {
      id: 'security',
      title: 'Security Support',
      icon: Shield,
      description: 'Security incidents and compliance questions',
      priority: 'critical',
      responseTime: '30 minutes - 1 hour'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Support',
      icon: Rocket,
      description: 'Enterprise customer support and account management',
      priority: 'critical',
      responseTime: '30 minutes - 1 hour'
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
    }
  ];

  const contactMethods = [
    {
<<<<<<< HEAD
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 302 464 0950',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message for non-urgent issues',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 24 hours',
      color: 'text-green-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      title: 'Emergency Support',
      description: 'Critical issues requiring immediate attention',
      contact: '+1 302 464 0950',
      availability: '24/7 for critical issues',
      color: 'text-red-500'
    }
  ];

  const filteredFAQ = selectedCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  const searchResults = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support resources and expert technical assistance
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
=======
import React from 'react';
import { Link } from 'react-router-dom';

export default function Support() {
  const supportChannels = [
    {
      title: 'Live Chat',
      icon: '💬',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Start Chat',
      actionType: 'button'
    },
    {
      title: 'Email Support',
      icon: '✉️',
      description: 'Send us a detailed message for complex issues',
      availability: '24/7',
      responseTime: 'Within 4 hours',
      action: 'Send Email',
      actionType: 'link',
      path: '/contact'
    },
    {
      title: 'Phone Support',
      icon: '📞',
      description: 'Call us directly for urgent technical issues',
      availability: 'Business Hours',
      responseTime: 'Immediate',
      action: 'Call Now',
      actionType: 'phone',
      phone: '+13024640950'
    },
    {
      title: 'Help Center',
      icon: '📚',
      description: 'Browse our comprehensive knowledge base',
      availability: '24/7',
      responseTime: 'Self-service',
      action: 'Browse Articles',
      actionType: 'link',
      path: '/help'
=======
      title: 'Live Chat',
      icon: MessageCircle,
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'from-green-500 to-emerald-500',
      path: '/chat'
    },
    {
      title: 'Phone Support',
      icon: Phone,
      description: 'Call us directly for urgent issues',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'from-blue-500 to-cyan-500',
      path: 'tel:+13024640950'
    },
    {
      title: 'Email Support',
      icon: Mail,
      description: 'Send detailed messages for complex issues',
      availability: '24/7',
      responseTime: '2-4 hours',
      color: 'from-purple-500 to-pink-500',
      path: 'mailto:kleber@ziontechgroup.com'
    },
    {
      title: 'Schedule Call',
      icon: Calendar,
      description: 'Book a dedicated support session',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Scheduled',
      color: 'from-orange-500 to-red-500',
      path: '/schedule'
    }
  ];

  const faqCategories = [
    {
      title: 'Getting Started',
      questions: [
        'How do I create my first project?',
        'What are the system requirements?',
        'How do I set up my account?'
      ]
    },
    {
      title: 'AI Services',
      questions: [
        'How do I integrate AI services?',
        'What AI models do you support?',
        'How do I train custom AI models?'
      ]
    },
    {
      title: 'Billing & Pricing',
      questions: [
        'How does your pricing work?',
        'Can I change my plan?',
        'What payment methods do you accept?'
      ]
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  BookOpen, 
  Video,
  FileText,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap
} from 'lucide-react';

const Support = () => {
  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      details: "+1 302 464 0950",
      availability: "Mon - Fri: 9:00 AM - 6:00 PM EST",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      details: "support@ziontechgroup.com",
      availability: "24/7 response within 4 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our team",
      details: "Available on all pages",
      availability: "Mon - Fri: 9:00 AM - 6:00 PM EST",
      color: "from-green-500 to-teal-500"
    }
  ];

  const helpResources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      link: "/docs",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      link: "/tutorials",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Knowledge Base",
      description: "Searchable articles and FAQs",
      link: "/kb",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users",
      link: "/community",
      color: "from-orange-500 to-red-500"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Simply schedule a free consultation call, and our team will assess your needs and design a customized solution. Visit our Get Started page for more details."
    },
    {
      question: "What is the typical implementation timeline?",
      answer: "Implementation timelines vary based on project complexity. Simple integrations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during planning."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes! All our solutions include ongoing support and maintenance. We offer different support tiers to meet your needs, from basic email support to 24/7 dedicated support teams."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve clients across all major industries including healthcare, finance, manufacturing, retail, government, and more. Our solutions are designed to be industry-agnostic while addressing specific sector challenges."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "Security is our top priority. We implement enterprise-grade security measures including encryption, access controls, and compliance frameworks. All solutions are designed to meet industry standards like SOC2, HIPAA, and GDPR."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! We specialize in seamless integrations with existing infrastructure. Our team will assess your current systems and design solutions that work with your existing technology stack."
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  ];

  const supportTiers = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      name: 'Basic Support',
<<<<<<< HEAD
      description: 'For all users',
      features: [
        'Email support within 24 hours',
=======
      description: 'Standard support for all customers',
      features: [
        'Email support (2-4 hour response)',
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
        'Help center access',
        'Community forum access',
        'Documentation access'
      ],
<<<<<<< HEAD
      price: 'Free'
    },
    {
      name: 'Priority Support',
      description: 'For paid plans',
      features: [
        'Email support within 4 hours',
        'Live chat support',
        'Phone support during business hours',
        'Priority ticket handling',
        'Dedicated support team'
      ],
      price: 'Included'
    },
    {
      name: 'Enterprise Support',
      description: 'For enterprise clients',
      features: [
        '24/7 phone support',
        'Dedicated support manager',
        'Custom SLA agreements',
        'On-site support available',
        'Training and consultation',
        'Priority feature requests'
      ],
      price: 'Custom'
    }
  ];

  const commonIssues = [
    {
      category: 'Account & Access',
      issues: [
        'Password reset and recovery',
        'Two-factor authentication setup',
        'Account verification issues',
        'Permission and role management'
      ]
    },
    {
      category: 'Technical Problems',
      issues: [
        'API integration issues',
        'Performance optimization',
        'Error troubleshooting',
        'Browser compatibility'
      ]
    },
    {
      category: 'Billing & Subscriptions',
      issues: [
        'Payment processing',
        'Invoice generation',
        'Plan upgrades/downgrades',
        'Refund requests'
      ]
    },
    {
      category: 'Service Usage',
      issues: [
        'Feature implementation',
        'Best practices guidance',
        'Training and onboarding',
        'Custom solutions'
      ]
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      name: "Basic Support",
      description: "Perfect for small implementations",
      features: [
        "Email support",
        "Basic documentation access",
        "Community forum access",
        "Response within 24 hours"
      ],
      price: "Included"
    },
    {
      name: "Professional Support",
      description: "Ideal for growing businesses",
      features: [
        "Phone and email support",
        "Priority response (4 hours)",
        "Video consultation",
        "Advanced documentation",
        "Training sessions"
      ],
      price: "$299/month"
    },
    {
      name: "Enterprise Support",
      description: "For mission-critical operations",
      features: [
        "24/7 dedicated support",
        "1-hour response guarantee",
        "Dedicated support engineer",
        "Custom training programs",
        "SLA guarantees",
        "On-site support available"
      ],
      price: "$999/month"
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're here to help you succeed. Choose the support channel that works best for you.
          </p>
        </div>
      </div>

      {/* Support Channels */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How can we help you?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel) => (
              <div key={channel.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{channel.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-cyan-400">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-cyan-400">{channel.responseTime}</span>
                  </div>
                </div>
                
                {channel.actionType === 'button' && (
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                    {channel.action}
                  </button>
                )}
                
                {channel.actionType === 'link' && (
                  <Link
                    to={channel.path}
                    className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                  >
                    {channel.action}
                  </Link>
                )}
                
                {channel.actionType === 'phone' && (
                  <a
                    href={`tel:${channel.phone}`}
                    className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                  >
                    {channel.action}
                  </a>
                )}
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-indigo-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            We're here to help you succeed with our technology solutions. 
            Get the support you need through multiple channels and resources.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/docs" 
              className="btn-secondary text-lg px-8 py-4"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Get Help When You Need It
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple support channels available to meet your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="text-cyan-400 font-medium mb-2">{channel.details}</div>
                <div className="text-gray-400 text-sm">{channel.availability}</div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Support Tiers */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Support Plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier) => (
              <div key={tier.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                  <div className="text-3xl font-bold text-white">{tier.price}</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 text-center font-medium"
=======
      </section>

      {/* Help Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Self-Service Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers quickly with our comprehensive help resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpResources.map((resource, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <Link 
                  to={resource.link} 
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  <span>Access</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Support Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support level that fits your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportTiers.map((tier, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium text-center transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 block"
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Common Issues */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Issues & Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonIssues.map((category) => (
              <div key={category.category} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">{category.category}</h3>
                <ul className="space-y-2">
                  {category.issues.map((issue, index) => (
                    <li key={index} className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                      • {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-6">Still need help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert support team is ready to assist you with any questions or issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Contact Support
              </Link>
              <Link
                to="/help"
                className="px-8 py-4 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Browse Help Center
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-4b12
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* Support Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How Can We Help You?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-400 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center mx-auto mb-4`}>
                <method.icon className={`w-6 h-6 ${method.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{method.description}</p>
              <p className="text-white font-medium mb-1">{method.contact}</p>
              <p className="text-gray-500 text-xs">{method.availability}</p>
            </div>
          ))}
=======
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Clock, FileText, Users, Search, Send, CheckCircle } from 'lucide-react';

const Support = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const supportCategories = [
    { id: 'general', name: 'General Support', icon: MessageCircle, description: 'General questions and assistance' },
    { id: 'technical', name: 'Technical Support', icon: FileText, description: 'Technical issues and troubleshooting' },
    { id: 'billing', name: 'Billing & Payments', icon: CheckCircle, description: 'Billing questions and payment issues' },
    { id: 'feature', name: 'Feature Requests', icon: Users, description: 'Suggest new features or improvements' }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through the contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.'
    },
    {
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including autonomous systems, machine learning solutions, AI research assistance, and custom AI development for your specific business needs.'
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we provide 24/7 monitoring and support for critical systems. Our support team is available during business hours, and we have emergency response procedures for urgent issues.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, government, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setMessage('');
    // In a real application, this would send the message to a backend service
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're here to help you succeed with Zion Tech Group solutions
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6 text-center">
            <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-300 mb-4">Speak directly with our support team</p>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              +1 (302) 464-0950
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm rounded-2xl border border-green-500/20 p-6 text-center">
            <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
            <p className="text-gray-300 mb-4">Send us a detailed message</p>
            <a 
              href="mailto:support@ziontechgroup.com" 
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              support@ziontechgroup.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6 text-center">
            <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
            <p className="text-gray-300 mb-4">Monday - Friday</p>
            <p className="text-cyan-400 font-medium">9:00 AM - 6:00 PM EST</p>
          </div>
        </div>
      </div>

      {/* Support Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">How can we help you?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supportCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-xl border transition-all duration-200 text-left ${
                    selectedCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-gray-600 hover:border-gray-500 hover:bg-gray-700/30'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <Icon className={`w-8 h-8 mt-1 ${
                      selectedCategory === category.id ? 'text-cyan-400' : 'text-gray-400'
                    }`} />
                    <div>
                      <h3 className="font-semibold text-white mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Send us a message</h2>
          
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-400 mb-6">We'll get back to you within 24 hours.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Please describe your question or issue in detail..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          )}
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
        </div>
      </div>

      {/* FAQ Section */}
<<<<<<< HEAD
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            All Categories
          </button>
          {supportCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {(searchQuery ? searchResults : filteredFAQ).map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-300">{item.question}</h3>
              <p className="text-gray-300">{item.answer}</p>
            </div>
          ))}
        </div>

        {searchQuery && searchResults.length === 0 && (
          <div className="text-center py-8">
            <HelpCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400">No results found for "{searchQuery}". Try different keywords or contact our support team.</p>
          </div>
        )}
      </div>

      {/* Additional Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/help" className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">Help Center</h3>
              <p className="text-gray-400">Comprehensive guides and tutorials for all our services</p>
            </div>
          </Link>
          
          <Link to="/docs" className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <FileText className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400">Documentation</h3>
              <p className="text-gray-400">Technical documentation and API references</p>
            </div>
          </Link>
          
          <Link to="/webinars" className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Video className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400">Training Videos</h3>
              <p className="text-gray-400">Video tutorials and training sessions</p>
            </div>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert team is ready to assist you with any questions or technical issues
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
=======
import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-4xl font-bold text-white mb-8">Support Center</h1>
        <p className="text-xl text-zion-slate-light">
          Welcome to our support center. We're here to help you with any questions or issues you may have.
        </p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-a191
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-600 rounded-lg p-6">
                <h3 className="text-lg font-medium text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-xl border border-cyan-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">Documentation</h3>
              <p className="text-gray-300 mb-4">Access our comprehensive documentation and user guides</p>
              <a href="/docs" className="text-cyan-400 hover:text-cyan-300 font-medium">
                View Documentation →
              </a>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">Help Center</h3>
              <p className="text-gray-300 mb-4">Browse our help articles and troubleshooting guides</p>
              <a href="/help" className="text-purple-400 hover:text-purple-300 font-medium">
                Visit Help Center →
              </a>
            </div>
          </div>
        </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
=======
      included: true
    },
    {
      name: 'Priority Support',
      description: 'Enhanced support for business customers',
      features: [
        'Phone support (1-2 hour response)',
        'Live chat support',
        'Priority ticket handling',
        'Dedicated support team'
      ],
      included: false
    },
    {
      name: 'Enterprise Support',
      description: 'Premium support for enterprise customers',
      features: [
        '24/7 phone support',
        'Dedicated account manager',
        'Custom SLA agreements',
        'On-site support available'
      ],
      included: false
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'text-red-400 bg-red-400/10';
      case 'high':
        return 'text-orange-400 bg-orange-400/10';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'low':
        return 'text-green-400 bg-green-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical':
        return <XCircle className="w-4 h-4" />;
      case 'high':
        return <AlertCircle className="w-4 h-4" />;
      case 'medium':
        return <Clock className="w-4 h-4" />;
      case 'low':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">Support Center</h1>
              <p className="text-xl text-zion-slate-light">Get the help you need, when you need it</p>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Get Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Link
                key={index}
                to={method.path}
                className="group bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-zion-slate-light mb-3">{method.description}</p>
                <div className="space-y-1 text-xs text-zion-slate-light">
                  <div className="flex items-center justify-between">
                    <span>Availability:</span>
                    <span className="text-zion-cyan">{method.availability}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Response:</span>
                    <span className="text-zion-cyan">{method.responseTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Support Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Categories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {supportCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`cursor-pointer bg-white/5 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:bg-white/10 ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/10'
                    : 'border-zion-cyan/20'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      <p className="text-zion-slate-light">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getPriorityIcon(category.priority)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(category.priority)}`}>
                      {category.priority}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-slate-light">Response Time:</span>
                  <span className="text-zion-cyan font-semibold">{category.responseTime}</span>
                </div>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Help Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Self-Service Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers quickly with our comprehensive help resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpResources.map((resource, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <Link 
                  to={resource.link} 
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  <span>Access</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Support Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support level that fits your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportTiers.map((tier, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium text-center transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 block"
                >
                  Get Started
                </Link>
=======

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {faqCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <Link
                      key={qIndex}
                      to={`/help/${category.title.toLowerCase().replace(/\s+/g, '-')}/${qIndex}`}
                      className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light group-hover:text-zion-cyan transition-colors">
                          {question}
                        </span>
                        <ChevronRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
=======

        {/* Support Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Tiers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {supportTiers.map((tier, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                  <p className="text-zion-slate-light">{tier.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  {tier.included ? (
                    <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-lg font-medium">
                      Included
                    </span>
                  ) : (
                    <Link
                      to="/contact"
                      className="inline-block px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan/30 transition-colors"
                    >
                      Contact Sales
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-zion-slate-light mb-2">+1 302 464 0950</p>
              <p className="text-xs text-zion-slate-light">Mon-Fri 9AM-6PM EST</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-zion-slate-light mb-2">kleber@ziontechgroup.com</p>
              <p className="text-xs text-zion-slate-light">24/7 Support</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light mb-2">364 E Main St STE 1008</p>
              <p className="text-xs text-zion-slate-light">Middletown DE 19709</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <p className="text-zion-slate-light mb-2">ziontechgroup.com</p>
              <p className="text-xs text-zion-slate-light">24/7 Access</p>
            </div>
          </div>
        </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
      </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our support team is ready to assist you with any questions or issues
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Contact Support Team
            </Link>
            <Link 
              to="/get-started" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    </div>
  );
};

<<<<<<< HEAD
export default Support;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default Support;
=======
    </div>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-4b12
=======
export default Support;
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
=======
export default Support;
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
=======
export default Support;
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
