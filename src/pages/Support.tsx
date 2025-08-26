import React from 'react';
import { Headphones, MessageSquare, Phone, Mail, Clock, HelpCircle, FileText, Video, Users } from 'lucide-react';

export default function Support() {
  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: '24/7',
      color: 'bg-blue-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Send us detailed inquiries and get comprehensive responses',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'bg-green-500'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Real-time assistance with our AI-powered chat system',
      contact: 'Available on website',
      availability: '24/7',
      color: 'bg-purple-500'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Remote Support',
      description: 'Get instant remote assistance for technical issues',
      contact: 'Via secure connection',
      availability: 'Business hours',
      color: 'bg-orange-500'
    }
  ];

  const faqCategories = [
    {
      title: 'Technical Issues',
      icon: <HelpCircle className="w-5 h-5" />,
      questions: [
        'How do I reset my password?',
        'What browsers are supported?',
        'How do I update my profile?',
        'Can I use the service on mobile?'
      ]
    },
    {
      title: 'Billing & Subscriptions',
      icon: <FileText className="w-5 h-5" />,
      questions: [
        'How do I change my billing plan?',
        'Can I cancel my subscription?',
        'What payment methods do you accept?',
        'Do you offer refunds?'
      ]
    },
    {
      title: 'Account Management',
      icon: <Users className="w-5 h-5" />,
      questions: [
        'How do I add team members?',
        'Can I transfer my account?',
        'How do I export my data?',
        'What are the user roles?'
      ]
    }
  ];

  const resources = [
    {
      title: 'Knowledge Base',
      description: 'Comprehensive guides and tutorials',
      icon: <FileText className="w-6 h-6" />,
      href: '/help'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: <Video className="w-6 h-6" />,
      href: '/training'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: <Users className="w-6 h-6" />,
      href: '/community'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            We're Here to Help
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Get the support you need from our expert team. We're available 24/7 to help you succeed with Zion Tech Group's innovative solutions.
          </p>
        </div>
      </div>

      {/* Support Channels */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Multiple Ways to Get Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className={`${channel.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-zion-slate-light mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-zion-cyan font-medium">{channel.contact}</p>
                  <p className="text-xs text-zion-slate-light flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {channel.availability}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faqCategories.map((category, index) => (
              <div key={index} className="bg-zion-slate border border-zion-slate-light rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-zion-cyan">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <li key={qIndex} className="text-zion-slate-light hover:text-zion-cyan cursor-pointer transition-colors">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-zion-cyan mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-zion-slate-light mb-4">{resource.description}</p>
                <a 
                  href={resource.href}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  Learn more
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions or technical issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
            >
              Contact Support
            </a>
            <a 
              href="/help"
              className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-slate-dark transition-colors"
            >
              Visit Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
