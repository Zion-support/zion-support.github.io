import { Link } from 'react - router - dom';
import React from 'react';
export default React.memo (function Help () {
import { 


  Search, 
  BookOpen, 
  Video, 
  FileText, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  FileText,
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Settings,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Users,
  Globe,
  Rocket
} from 'lucide - react';

  const [searchQuery, setSearchQuery] = useState ('') ;
  const [expandedCategory, setExpandedCategory] = useState < string | null> (null) ;

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: Rocket,
      color: 'from - blue - 600 to - cyan - 600',
      items: [
        { name: 'Quick Start Guide', href: '/help / quick - start', description: 'Get up and running in minutes' },
        { name: 'Account Setup', href: '/help / account - setup', description: 'Configure your account and preferences' },
        { name: 'First Project', href: '/help / first - project', description: 'Create your first project with Zion Tech' },
        { name: 'API Keys', href: '/help / api - keys', description: 'Generate and manage your API keys' }
      ]
    },
    {
      title: 'Core Services',
      icon: Settings,
      color: 'from - green - 600 to - emerald - 600',
      items: [
        { name: 'AI Business Intelligence', href: '/help / ai - business - intelligence', description: 'AI - powered analytics and insights' },
        { name: 'Cloud DevOps', href: '/help / cloud - devops', description: 'Infrastructure and automation' },
        { name: 'Cybersecurity', href: '/help / cybersecurity', description: 'Security and compliance solutions' },
        { name: 'Digital Twin', href: '/help / digital - twin', description: 'Simulation and monitoring' },
        { name: 'IoT Edge', href: '/help / iot - edge', description: 'IoT and edge computing' },
        { name: 'Micro SaaS', href: '/help / micro - saas', description: 'Scalable software solutions' }
      ]
    },
    {
      id: 'billing - account',
      title: 'Billing & Account',
      icon: Users,
      description: 'Account management and billing information',
      articles: [
        {
          title: 'Billing Overview',
          description: 'Understanding your billing structure and charges',
          url: '/help / billing / overview',
          type: 'guide'
        },
        {
          title: 'Payment Methods',
          description: 'Adding and managing payment methods',
          url: '/help / billing / payment - methods',
          type: 'guide'
        },
        {
          title: 'Invoice Management',
          description: 'Accessing and managing your invoices',
          url: '/help / billing / invoices',
          type: 'guide'
        },
        {
          title: 'Account Settings',
          description: 'Managing your account preferences and settings',
          url: '/help / billing / account - settings',
          type: 'guide'
        }
      ]
    }
  ];

  const quickLinks = [
    {
      name: 'Live Chat',
      icon: MessageCircle,
      description: 'Chat with our support team',
      response: 'Usually responds in 2 minutes',
      href: '/help / live - chat'
    },
    {
      name: 'Email Support',
      icon: Mail,
      url: 'mailto:support@ziontechgroup.com',
      color: 'from - orange - 500 to - orange - 600'
    }
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST', available: true },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST', available: true },
    { day: 'Sunday', hours: 'Emergency Support Only', available: false }
  ];

  const filteredCategories = helpCategories.filter (category =>
    category.title.toLowerCase () .includes (searchQuery.toLowerCase () ) ||
    category.description.toLowerCase () .includes (searchQuery.toLowerCase () ) ||
    category.articles.some (article =>
      article.title.toLowerCase () .includes (searchQuery.toLowerCase () ) ||
      article.description.toLowerCase () .includes (searchQuery.toLowerCase () ) ) ) ;

  return (<div className="min - h-screen bg - slate - 900 text - white">
      {/* Header */}
      <div className="bg - slate - 800 / 50 border - b border - slate - 700">
        <div className="container mx - auto px - 4 py - 12">
          <div className="max - w-4xl mx - auto text - center">
            <h1 className="text - 4xl font - bold mb - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">
              Help Center
            </h1>
            <p className="text - xl text - slate - 300 mb - 8">
              Find answers, learn best practices, and get the most out of Zion Tech Group services
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max - w-2xl mx - auto">
              <div className="relative">
                <Search className="absolute left - 4 top - 1/2 - translate - y-1 / 2 w - 5 h - 5 text - slate - 400" />
                <input
                  type="text"
                  placeholder="Search for help articles: unknown, guides: unknown, and solutions..."
                  value={searchQuery}
                  onChange={ (e) => setSearchQuery (e.target.value) }
                  className="w - full pl - 12 pr - 4 py - 4 bg - slate - 800 border border - slate - 600 rounded - lg focus:border - cyan - 400 focus:ring - 2 focus:ring - cyan - 400 / 20 outline - none text - white placeholder - slate - 400"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Support Links */}
      <section className="py - 16">
        <div className="container mx - auto px - 6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text - center mb - 12"
          >
            <h2 className="text - 3xl font - bold text - white mb - 4">Quick Support</h2>
            <p className="text - gray - 300">Get immediate assistance through our support channels</p>
          </motion.div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6">
            {quickLinks.map ( (link, index) => (<motion.a
                key={index}
                href={link.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg - slate - 800 / 50 p - 6 rounded - xl border border - slate - 700 / 50 hover:border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 105 group"
              >
                <div className={`w - 16 h - 16 bg - gradient - to - r ${link.color} rounded - xl flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300`}>
                  <link.icon className="w - 8 h - 8 text - white" />
                </div>
                <h3 className="text - lg font - semibold text - white mb - 2">{link.title}</h3>
                <p className="text - gray - 300 text - sm">{link.description}</p>
              </motion.a>) ) }
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py - 16 bg - slate - 800 / 30">
        <div className="container mx - auto px - 6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text - center mb - 12"
          >
            <h2 className="text - 3xl font - bold text - white mb - 4">Support Hours</h2>
            <p className="text - gray - 300">We're here to help when you need us</p>
          </motion.div>

          <div className="max - w-2xl mx - auto">
            <div className="bg - slate - 800 / 50 rounded - xl border border - slate - 700 / 50 overflow - hidden">
              {supportHours.map ( (schedule, index) => (<div
                  key={index}
                  className={`flex items - center justify - between p - 4 ${
                    index !== supportHours.length - 1 ? 'border - b border - slate - 700 / 50' : ''
                  }`}
                >
                  <div className="flex items - center space - x-3">
                    <Clock className={`w - 5 h - 5 ${schedule.available ? 'text - green - 400' : 'text - orange - 400'}`} />
                    <span className="text - white font - medium">{schedule.day}</span>
                  </div>
                  <div className="text - right">
                    <span className={`text - sm ${schedule.available ? 'text - gray - 300' : 'text - orange - 400'}`}>
                      {schedule.hours}
                    </span>
                    {!schedule.available && (<span className="block text - xs text - orange - 400">24 / 7 Emergency Support Available</span>) }
                  </div>
                </div>) ) }
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py - 16">
        <div className="container mx - auto px - 6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text - center mb - 12"
          >
            <h2 className="text - 3xl font - bold text - white mb - 4">Help Categories</h2>
            <p className="text - gray - 300">Browse our organized help content by category</p>
          </motion.div>

          <div className="space - y-6">
            {filteredCategories.map ( (category, index) => (<motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg - slate - 800 / 50 rounded - xl border border - slate - 700 / 50 overflow - hidden"
              >
                <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button" type="submit"
                  className="absolute right - 2 top - 1/2 - translate - y-1 / 2 px - 4 py - 2 bg - cyan - 500 hover:bg - cyan - 600 text - white rounded - md transition - colors"
                >
                  <div className="flex items - center justify - between">
                    <div className="flex items - center space - x-4">
                      <div className="w - 12 h - 12 bg - gradient - to - br from - cyan - 400 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center">
                        <category.icon className="w - 6 h - 6 text - cyan - 400" />
                      </div>
                      <div>
                        <h3 className="text - xl font - semibold text - white mb - 1">{category.title}</h3>
                        <p className="text - gray - 300">{category.description}</p>
                      </div>
                    </div>
                    {expandedCategory === category.id ? (<ChevronDown className="w - 6 h - 6 text - cyan - 400" />) : (<ChevronRight className="w - 6 h - 6 text - cyan - 400" />) }
                  </div>
                </button>
              </div>
            </form>;
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <section className="py - 16 bg - slate - 800 / 30">;
        <div className="container mx - auto px - 6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text - center mb - 12"
          >
            <h2 className="text - 3xl font - bold text - white mb - 4">Additional Resources</h2>
            <p className="text - gray - 300">Explore more helpful resources and materials</p>
          </motion.div>

          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">
            {[
              {
                icon: BookOpen,
                title: 'Documentation',
                description: 'Comprehensive technical documentation and API references',
                url: '/help / documentation',
                color: 'from - blue - 500 to - blue - 600'
              },
              {
                icon: Video,
                title: 'Video Tutorials',
                description: 'Step - by - step video guides for common tasks',
                url: '/help / videos',
                color: 'from - green - 500 to - green - 600'
              },
              {
                icon: Download,
                title: 'Downloads',
                description: 'Software, tools, and resources for your projects',
                url: '/help / downloads',
                color: 'from - purple - 500 to - purple - 600'
              }
            ].map ( (resource, index) => (<motion.a
                key={index}
                href={resource.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg - slate - 800 / 50 p - 6 rounded - xl border border - slate - 700 / 50 hover:border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 105 group"
              >
                <div className={`w - 16 h - 16 bg - gradient - to - r ${resource.color} rounded - xl flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300`}>
                  <resource.icon className="w - 8 h - 8 text - white" />
                </div>
                <h3 className="text - lg font - semibold text - white mb - 2">{resource.title}</h3>
                <p className="text - gray - 300 text - sm">{resource.description}</p>
              </motion.a>) ) }
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py - 20 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10">;
        <div className="container mx - auto px - 6 text - center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text - 4xl font - bold text - white mb - 6">
              Still Need Help?
            </h2>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto mb - 8">
              Our support team is ready to assist you with any questions or issues you may have.
            </p>
            <div className="flex flex - wrap justify - center gap - 4">
              <a
                href="/contact"
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 text - white rounded - lg font - semibold hover:from - cyan - 500 hover:to - blue - 600 transition - all duration - 300 hover:scale - 105"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="px - 8 py - 4 border border - cyan - 400 text - cyan - 400 rounded - lg font - semibold hover:bg - cyan - 400 hover:text - white transition - all duration - 300"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>) ;
}