import React, { useState } from 'react';
import { Search, BookOpen, MessageCircle, FileText, Users, Settings, HelpCircle, Mail, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Getting Started']);

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      items: [
        {
          question: 'How do I get started with Zion Tech Group?',
          answer: 'Visit our Get Started page to begin your journey with us. You can also contact our team directly for personalized guidance.'
        },
        {
          question: 'What services do you offer?',
          answer: 'We offer AI solutions, cloud & DevOps, cybersecurity, IT infrastructure, digital transformation, and consulting services. Explore our Services page for detailed information.'
        },
        {
          question: 'How do I request a quote?',
          answer: 'You can request a quote by filling out our contact form, calling us directly, or visiting our pricing page to see our standard packages.'
        }
      ]
    },
    {
      title: 'Services & Solutions',
      icon: Settings,
      items: [
        {
          question: 'What AI solutions do you provide?',
          answer: 'We offer AI-powered business solutions including autonomous systems, research assistants, business intelligence, and workflow automation.'
        },
        {
          question: 'Do you provide cybersecurity services?',
          answer: 'Yes, we offer comprehensive cybersecurity solutions including SOC2 compliance automation, threat detection, and security infrastructure.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve enterprise, healthcare, financial, government, manufacturing, and retail sectors with specialized solutions.'
        }
      ]
    },
    {
      title: 'Account & Billing',
      icon: Users,
      items: [
        {
          question: 'How do I contact your team?',
          answer: 'You can reach us through our contact form, email us at info@ziontechgroup.com, or call us at +1 (302) 464-0950.'
        },
        {
          question: 'What are your pricing options?',
          answer: 'We offer flexible pricing plans. Visit our pricing page to see our packages or contact us for custom enterprise solutions.'
        },
        {
          question: 'Do you offer support after implementation?',
          answer: 'Yes, we provide ongoing support and maintenance for all our solutions. Our support team is available to help with any issues.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: HelpCircle,
      items: [
        {
          question: 'How do I get technical support?',
          answer: 'For technical support, contact our support team through the contact form or email support@ziontechgroup.com.'
        },
        {
          question: 'What if I have a service issue?',
          answer: 'We have a dedicated support process. Contact our team immediately and we\'ll work to resolve the issue as quickly as possible.'
        },
        {
          question: 'Do you provide training?',
          answer: 'Yes, we provide comprehensive training for all our solutions to ensure your team can effectively use our technology.'
        }
      ]
    }
  ];

  const quickLinks = [
    { title: 'Contact Support', href: '/contact', icon: MessageCircle, description: 'Get in touch with our support team' },
    { title: 'Services Overview', href: '/services', icon: FileText, description: 'Explore our comprehensive services' },
    { title: 'Pricing Plans', href: '/pricing', icon: FileText, description: 'View our pricing and packages' },
    { title: 'Get Started', href: '/get-started', icon: BookOpen, description: 'Begin your journey with us' }
  ];

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredCategories = faqCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.items.some(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to frequently asked questions, get support, and learn how to make the most of our services.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for help topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <link.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {link.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{link.description}</p>
            </Link>
          ))}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {filteredCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <category.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                </div>
                {expandedCategories.includes(category.title) ? (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {expandedCategories.includes(category.title) && (
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    {category.items.map((item, index) => (
                      <div key={index} className="border-l-4 border-blue-200 pl-4">
                        <h3 className="font-medium text-gray-900 mb-2">{item.question}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Support
            </Link>
            <a
              href="mailto:support@ziontechgroup.com"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Email Support
            </a>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-3 bg-green-100 rounded-lg inline-block mb-3">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">Comprehensive guides and technical documentation</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-purple-100 rounded-lg inline-block mb-3">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Connect with other users and experts</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-orange-100 rounded-lg inline-block mb-3">
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog</h3>
              <p className="text-gray-600 text-sm">Latest updates and industry insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}