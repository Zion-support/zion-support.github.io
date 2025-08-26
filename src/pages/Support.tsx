import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Video,
  FileText,
  Users,
  Globe,
  Building,
  Rocket,
  Brain,
  Shield,
  Cpu,
  Star,
  ArrowRight,
  ExternalLink,
  Download,
  Calendar,
  MapPin,
  Zap,
  Target,
  Lightbulb,
  Code,
  Database,
  Network,
  Cloud,
  Lock,
  BarChart3,
  Palette,
  Smartphone,
  Server,
  CreditCard
} from 'lucide-react';

const Support: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');

  const faqCategories = {
    general: [
      {
        question: 'How do I get started with Zion Tech Group services?',
        answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, government, and more. Our AI and technology solutions are designed to be industry-agnostic and can be customized for any sector.'
      },
      {
        question: 'Do you offer remote support?',
        answer: 'Yes, we provide comprehensive remote support for all our services. Our team can assist you from anywhere in the world, ensuring you get the help you need regardless of your location.'
      }
    ],
    technical: [
      {
        question: 'What AI technologies do you use?',
        answer: 'We utilize cutting-edge AI technologies including machine learning, natural language processing, computer vision, and autonomous systems. Our solutions are built on the latest frameworks and are continuously updated with the newest advancements.'
      },
      {
        question: 'How secure are your solutions?',
        answer: 'Security is our top priority. All our solutions include enterprise-grade security features, SOC2 compliance, and regular security audits. We follow industry best practices and maintain multiple security certifications.'
      },
      {
        question: 'Can you integrate with existing systems?',
        answer: 'Absolutely! We specialize in seamless integration with existing systems. Our team will assess your current infrastructure and ensure our solutions work perfectly with your existing technology stack.'
      }
    ],
    billing: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment plans for enterprise clients. All payments are processed securely through our payment partners.'
      },
      {
        question: 'Do you offer refunds?',
        answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied with our services within the first 30 days, we\'ll work to resolve any issues or provide a full refund.'
      },
      {
        question: 'Can I change my plan mid-contract?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. We\'ll prorate any billing adjustments and ensure a smooth transition between plans.'
      }
    ],
    compliance: [
      {
        question: 'What compliance standards do you meet?',
        answer: 'We maintain SOC2 Type II, ISO 27001, and GDPR compliance. Our solutions are designed to meet the highest security and privacy standards required by regulated industries.'
      },
      {
        question: 'Do you provide compliance documentation?',
        answer: 'Yes, we provide comprehensive compliance documentation including audit reports, security assessments, and compliance certificates. This documentation can be shared with your auditors and stakeholders.'
      },
      {
        question: 'How do you handle data privacy?',
        answer: 'We follow strict data privacy protocols and are fully GDPR compliant. All data is encrypted, access is strictly controlled, and we never share your data with third parties without explicit consent.'
      }
    ]
  };

  const supportChannels = [
    {
      title: 'Getting Started Guide',
      description: 'Step-by-step guide to implementing our solutions',
      icon: '🚀',
      link: '/docs/getting-started'
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference and examples',
      icon: '🔌',
      link: '/docs/api'
    },
    {
      title: 'Best Practices',
      description: 'Industry best practices and recommendations',
      icon: '⭐',
      link: '/docs/best-practices'
    },
    {
      title: 'Video Tutorials',
      description: 'Visual guides and walkthroughs',
      icon: '🎥',
      link: '/tutorials'
    },
    {
      title: 'Case Studies',
      description: 'Real-world implementation examples',
      icon: '📊',
      link: '/case-studies'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: '👥',
      link: '/community'
    }
  ];

  const contactMethods = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      contact: '+1 302 464 0950',
      availability: 'Mon-Fri 9AM-6PM EST',
      response: 'Immediate'
    },
    {
      title: 'Email Support',
      description: 'Send detailed questions and get comprehensive answers',
      icon: Mail,
      contact: 'kleber@ziontechgroup.com',
      availability: '24/7',
      response: 'Within 4 hours'
    },
    {
      title: 'Live Chat',
      description: 'Real-time assistance for quick questions',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      response: 'Instant'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and resources',
      icon: BookOpen,
      contact: 'Always available',
      availability: '24/7',
      response: 'Always available',
      link: '/docs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Support
            </span>
            <br />
            <span className="text-white">Center</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get the help you need with our comprehensive support resources, expert assistance, and detailed documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Support
            </Link>
            <Link
              to="/docs"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-cyan-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5 text-blue-300" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5 text-blue-300" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Channels
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Multiple ways to get the help you need, when you need it
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Contact:</span>
                    <span className="text-white">{method.contact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-white">{method.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-white">{method.response}</span>
                  </div>
                </div>
                {method.link && (
                  <Link
                    to={method.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mt-4"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Quick answers to common questions about our services and solutions
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(faqCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {faqCategories[activeCategory as keyof typeof faqCategories].map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation & Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Documentation & Resources
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive guides, tutorials, and resources to help you succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <Link
                  to={channel.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Access Resource
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-cyan-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our support team is here to help you succeed. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Contact Support
            </Link>
            <Link
              to="/docs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Browse Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
