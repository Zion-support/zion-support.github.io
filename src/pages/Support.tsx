import React, { useState } from 'react';
import SEO from '../components/SEO';

const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState('faq');

  const faqItems = [
    {
      question: "How do I get started with your AI services?",
      answer: "Getting started is easy! Simply sign up for an account, choose a plan that fits your needs, and follow our onboarding guide. You can also schedule a demo to see our services in action."
    },
    {
      question: "What is your response time for support requests?",
      answer: "We typically respond to support requests within 24 hours during business days. Premium customers receive priority support with faster response times."
    },
    {
      question: "Do you offer custom AI solutions?",
      answer: "Yes! We specialize in custom AI solutions tailored to your specific business needs. Contact our sales team to discuss your requirements and get a personalized quote."
    },
    {
      question: "How secure is my data?",
      answer: "Data security is our top priority. We use enterprise-grade encryption, follow industry best practices, and are SOC 2 compliant. Your data is never shared with third parties without your explicit consent."
    },
    {
      question: "Can I integrate your services with my existing systems?",
      answer: "Absolutely! Our services are designed to integrate seamlessly with existing systems through our comprehensive APIs and SDKs. We support most popular platforms and can provide custom integration assistance."
    },
    {
      question: "What happens if I need to cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account dashboard. We offer a 30-day money-back guarantee for new customers, and you'll retain access to your data for 30 days after cancellation."
    }
  ];

  const supportChannels = [
    {
      title: "Email Support",
      description: "Get help via email with detailed responses",
      icon: "📧",
      contact: "support@ziontechgroup.com",
      responseTime: "24 hours"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      icon: "💬",
      contact: "Available 9 AM - 6 PM EST",
      responseTime: "Immediate"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: "📞",
      contact: "+1 (555) 123-4567",
      responseTime: "Immediate"
    },
    {
      title: "Community Forum",
      description: "Get help from our community and experts",
      icon: "👥",
      contact: "forum.ziontechgroup.com",
      responseTime: "Varies"
    }
  ];

  const knowledgeBaseCategories = [
    {
      title: "Getting Started",
      articles: 12,
      description: "Learn the basics of using our platform"
    },
    {
      title: "API Documentation",
      articles: 25,
      description: "Complete API reference and examples"
    },
    {
      title: "Troubleshooting",
      articles: 18,
      description: "Common issues and their solutions"
    },
    {
      title: "Best Practices",
      articles: 15,
      description: "Tips and recommendations for optimal results"
    }
  ];

  return (
    <>
      <SEO 
        title="Support - Zion Tech Group"
        description="Get help and support for Zion Tech Group's AI and technology services. Find answers, contact support, and access resources."
        keywords="support, help, faq, contact, documentation, zion tech group"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're here to help! Find answers to common questions, get technical support, 
                and access our comprehensive knowledge base.
              </p>
            </div>

            {/* Support Channels */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportChannels.map((channel, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                    <div className="text-4xl mb-4">{channel.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                    <p className="text-gray-300 mb-4">{channel.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm text-purple-400 font-semibold">{channel.contact}</p>
                      <p className="text-sm text-gray-300">Response: {channel.responseTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Knowledge Base */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Knowledge Base</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {knowledgeBaseCategories.map((category, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                    <p className="text-gray-300 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-400">{category.articles} articles</span>
                      <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                        Browse →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Still Need Help?</h2>
              <div className="max-w-2xl mx-auto">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Priority
                    </label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:outline-none">
                      <option value="low">Low - General inquiry</option>
                      <option value="medium">Medium - Technical issue</option>
                      <option value="high">High - Urgent problem</option>
                      <option value="critical">Critical - System down</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                      placeholder="Please provide detailed information about your issue or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                  >
                    Submit Support Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;