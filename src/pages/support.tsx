import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Headphones, 
  MessageCircle, 
  BookOpen, 
  Video,
  Phone,
  Mail,
  Clock,
  Search,
  ArrowRight,
  FileText,
  Users,
  Zap,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const Support = () => {
  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "24/7",
      response: "Immediate",
      contact: "+1 302 464 0950",
      priority: "High Priority Issues"
    },
    {
      icon: <Mail className="w-6 h-6 text-green-400" />,
      title: "Email Support",
      description: "Send detailed inquiries and get written responses",
      availability: "24/7",
      response: "Within 4 hours",
      contact: "support@ziontechgroup.com",
      priority: "General Inquiries"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-purple-400" />,
      title: "Live Chat",
      description: "Real-time chat with support representatives",
      availability: "Business Hours",
      response: "Instant",
      contact: "Available on website",
      priority: "Quick Questions"
    }
  ];

  const helpCategories = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      articles: "500+ articles",
      link: "/docs"
    },
    {
      icon: <Video className="w-8 h-8 text-green-400" />,
      title: "Video Tutorials",
      description: "Step-by-step video guides and demos",
      articles: "100+ videos",
      link: "/training"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Community Forum",
      description: "Connect with other users and experts",
      articles: "Active community",
      link: "/community"
    },
    {
      icon: <FileText className="w-8 h-8 text-yellow-400" />,
      title: "Knowledge Base",
      description: "Searchable database of solutions",
      articles: "1000+ solutions",
      link: "/knowledge-base"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Contact our sales team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions."
    },
    {
      question: "What is your typical response time for support requests?",
      answer: "We prioritize support based on issue severity. Critical issues get immediate attention, while general inquiries are typically resolved within 4 hours during business hours."
    },
    {
      question: "Do you provide training for your solutions?",
      answer: "Yes! We offer comprehensive training programs including on-site training, virtual sessions, and self-paced online courses. Training is included with most enterprise contracts."
    },
    {
      question: "What happens if I need emergency support outside business hours?",
      answer: "Our 24/7 support line is always available for critical issues. We have on-call engineers ready to respond to emergencies at any time."
    },
    {
      question: "Can you help with custom integrations?",
      answer: "Absolutely! Our team specializes in custom integrations and can work with your existing systems to ensure seamless implementation and operation."
    }
  ];

  const supportTiers = [
    {
      name: "Basic Support",
      description: "Standard support for all customers",
      features: [
        "Email support within 24 hours",
        "Documentation access",
        "Community forum access",
        "Basic troubleshooting"
      ],
      included: true
    },
    {
      name: "Premium Support",
      description: "Enhanced support for business customers",
      features: [
        "Phone and email support",
        "4-hour response time",
        "Priority ticket handling",
        "Dedicated support engineer",
        "Training sessions included"
      ],
      included: false
    },
    {
      name: "Enterprise Support",
      description: "24/7 dedicated support for enterprise clients",
      features: [
        "24/7 phone and email support",
        "1-hour response time",
        "Dedicated support team",
        "Custom SLA agreements",
        "On-site support available",
        "Quarterly business reviews"
      ],
      included: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <Headphones className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              We're Here to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Help
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the support you need, when you need it. Our expert team is ready 
              to help you succeed with Zion Tech Group solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the support channel that works best for your needs. 
              We're available 24/7 for critical issues.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {channel.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">
                    {channel.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-4">
                  {channel.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-white font-medium">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-white font-medium">{channel.response}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Contact:</div>
                  <div className="text-white font-medium">{channel.contact}</div>
                </div>
                
                <div className="text-sm text-blue-400 font-medium">
                  {channel.priority}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Help Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find answers quickly with our comprehensive collection of 
              documentation, tutorials, and community resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm text-center mb-3">
                  {category.description}
                </p>
                <div className="text-blue-400 text-sm text-center font-medium">
                  {category.articles}
                </div>
                <div className="flex justify-center mt-4">
                  <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Support Tiers
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the support level that matches your business needs. 
              All customers get basic support, with premium options available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 ${
                  tier.included 
                    ? 'border-blue-500/50 bg-blue-500/5' 
                    : 'border-slate-700 hover:border-blue-500/50'
                } transition-all duration-300`}
              >
                {tier.included && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                      Included
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-white mb-2 text-center">
                  {tier.name}
                </h3>
                <p className="text-gray-400 text-sm text-center mb-6">
                  {tier.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {!tier.included && (
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Contact Sales
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? 
              Contact our support team.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is ready to assist you. Don't hesitate to reach out 
            for personalized help with your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Phone className="mr-2 w-5 h-5" />
              Contact Support
            </Link>
            <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors">
              <ExternalLink className="mr-2 w-5 h-5" />
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;