import React, { useState } from "react"
import { SEO } from "../components/SEO"
import { 
  HelpCircle,
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Search,
  BookOpen,
  FileText,
  Video,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Ticket,
  MessageCircle,
  Headphones,
  Globe,
  Smartphone,
  Monitor,
  Shield,
  Rocket,
  Brain,
  Cloud
} from "lucide-react"
const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),

  const categories = [
    { id: 'all', name: 'All Categories', icon: HelpCircle }
    { id: 'technical', name: 'Technical Issues', icon: Monitor }
    { id: 'billing', name: 'Billing & Account', icon: FileText }
    { id: 'product', name: 'Product Support', icon: Rocket }
    { id: 'integration', name: 'Integration Help', icon: Zap }
    { id: 'general', name: 'General Questions', icon: Users }
  ]
  const supportChannels = [
    {
      icon: MessageCircle,title: 'Live Chat',description: 'Get instant help from our support team',availability: '24/7',responseTime: '< 2 minutes',priority: 'high',href: '/support/chat'
    }
    {
      icon: Ticket,title: 'Support Tickets',description: 'Submit detailed support requests',availability: '24/7',responseTime: '< 4 hours',priority: 'medium',href: '/support/tickets'
    }
    {
      icon: Phone,title: 'Phone Support',description: 'Speak directly with our experts',availability: 'Mon-Fri, 9AM-6PM EST',
      responseTime: 'Immediate',priority: 'high',href: '/support/phone'
    }
    {
      icon: Mail,title: 'Email Support',description: 'Send us detailed questions',availability: '24/7',responseTime: '< 24 hours',priority: 'medium',href: '/support/email'
    }
  ]
  const quickSolutions = [
    {
      icon: BookOpen,title: 'Knowledge Base',description: 'Browse our comprehensive documentation',articles: '500+ articles',href: '/docs'
    }
    {
      icon: Video,title: 'Video Tutorials',description: 'Step-by-step video guides',videos: '100+ tutorials',href: '/tutorials'
    }
    {
      icon: Users,title: 'Community Forum',description: 'Connect with other users',members: '10,000+ members',
      href: '/community'
    }
    {
      icon: FileText,title: 'FAQ',description: 'Frequently asked questions',questions: '200+ FAQs',href: '/faq'
    }
  ]
  const commonIssues = [
    {
      category: 'Technical',title: 'How to reset my password?',solution: 'Go to the login page and click "Forgot Password" to reset your password via email.',tags: ['passwordlogin', 'account']
    },
    {
      category: 'Product',title: 'How to integrate with my existing systems?',solution: 'We provide comprehensive API documentation and integration guides for all major platforms.',tags: ['integrationapi', 'documentation']
    },
    {
      category: 'Billing',title: 'How to update my billing information?',solution: 'Navigate to your account settings and update your billing information in the billing section.',tags: ['billingaccount', 'payment']
    },
    {
      category: 'Technical',title: 'Service is running slow, what should I do?',
      solution: 'Check your internet connection and try clearing your browser cache. If the issue persists, contact support.',
      tags: ['performancetroubleshooting', 'speed']
    }
  ],

  const filteredIssues = commonIssues.filter(issue => 
    (selectedCategory === 'all' || issue.category.toLowerCase() === selectedCategory) &&
    (issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     issue.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
     issue.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  ),

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Support - Zion Tech Group"
        description="Get help and support for all Zion Tech Group products and services. 24/7 support available through multiple channels including live chat, phone, and email."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Customer Support
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our support team is here to help you succeed with our products and services. 
              Get assistance through multiple channels with fast response times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg">
                Start Live Chat
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition-all duration-200">
                Submit Ticket
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-slate-800/20">
        <div className="container-responsive">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or common issues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Multiple Ways to Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you. We're available 24/7 
              to ensure you get the help you need when you need it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                  <channel.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{channel.description}</p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {channel.availability}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Zap className="w-4 h-4 mr-2" />
                    {channel.responseTime}
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                  Get Help
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Solutions Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions and learn how to use our products 
              effectively with our self-service resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickSolutions.map((solution, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-400/40 group-hover:to-pink-500/40 transition-all duration-200">
                  <solution.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                
                <div className="text-sm text-cyan-400 mb-4 font-medium">
                  {solution.articles || solution.videos || solution.questions || solution.members}
                </div>
                
                <button className="w-full px-4 py-2 bg-slate-700/50 text-white font-medium rounded-lg hover:bg-slate-600/50 transition-all duration-200 hover:scale-105">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Common Issues & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to frequently asked questions and common problems.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-400/20 border-cyan-400/40 text-cyan-400'
                    : 'bg-slate-700/50 border-slate-600/50 text-gray-300 hover:bg-slate-600/50 hover:border-cyan-400/30'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredIssues.map((issue, index) => (
              <div key={index} className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-700/50 hover:border-cyan-400/30 transition-all duration-200">
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center px-2 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded text-xs text-cyan-400">
                    {issue.category}
                  </span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">{issue.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{issue.solution}</p>
                
                <div className="flex flex-wrap gap-2">
                  {issue.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="inline-flex items-center px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {filteredIssues.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-24 h-24 text-gray-400 mx-auto mb-6" />
              <p className="text-gray-400 text-lg">No issues match your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions or issues. 
            Don't hesitate to reach out - we're here to help you succeed.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg">
              Contact Support
            </button>
            <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition-all duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Support