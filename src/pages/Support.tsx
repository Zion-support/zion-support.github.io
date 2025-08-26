import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, BookOpen, Rocket, Zap, Star, Video, BarChart3, Users, HelpCircle, MessageSquare } from 'lucide-react';

const Support = () => {
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
      name: '24/7 Email Support',
      description: 'Get help anytime via email',
      icon: Mail,
      response: 'Within 2 hours',
      link: '/contact'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      response: 'Within 15 minutes',
      link: '/contact'
    },
    {
      name: 'Live Chat',
      description: 'Real-time assistance',
      icon: MessageCircle,
      response: 'Instant',
      link: '/contact'
    },
    {
      name: 'Knowledge Base',
      description: 'Self-service resources',
      icon: BookOpen,
      response: 'Always available',
      link: '/docs'
    }
  ];

  const supportResources = [
    {
      title: 'Getting Started Guide',
      description: 'Step-by-step guide to implementing our solutions',
      icon: Rocket,
      link: '/docs/getting-started'
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference and examples',
      icon: Zap,
      link: '/docs/api'
    },
    {
      title: 'Best Practices',
      description: 'Industry best practices and recommendations',
      icon: Star,
      link: '/docs/best-practices'
    },
    {
      title: 'Video Tutorials',
      description: 'Visual guides and walkthroughs',
      icon: Video,
      link: '/tutorials'
    },
    {
      title: 'Case Studies',
      description: 'Real-world implementation examples',
      icon: BarChart3,
      link: '/case-studies'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: Users,
      link: '/community'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2"/>
              Support Center
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              We're Here to
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Help</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get the support you need to succeed with our comprehensive help resources, 
              expert assistance, and detailed documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple support channels to ensure you get the assistance you need, 
              when you need it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{channel.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{channel.description}</p>
                <p className="text-blue-400 text-sm font-medium">{channel.response}</p>
                <a href={channel.link} className="inline-block mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium">
                  Get Help →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Self-Service Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive documentation and resources to help you get the most 
              out of our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportResources.map((resource, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                <a href={resource.link} className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick answers to common questions about our services and solutions.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(faqCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqCategories[activeCategory as keyof typeof faqCategories].map((item, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is ready to assist you with any questions or issues 
            you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Support
            </a>
            <a href="/docs" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Browse Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
