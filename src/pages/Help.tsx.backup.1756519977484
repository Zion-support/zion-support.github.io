import React, { useState } from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { SEO  } from '@/components/SEO';
import { Search, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Brain,
  Cloud,
  Shield,
  Rocket,
  BookOpen,
  Video,
  Download,
  ExternalLink
 } from 'lucide-react.ts';

export default function Help(...args: any[]): any {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'account-billing',
      name: 'Account & Billing',
      icon: Users,
      description: 'Account management, billing, and subscription questions',
      articles: [
        { title: 'How to update billing information', readTime: '3 min', difficulty: 'Beginner' },
        { title: 'Changing subscription plans', readTime: '5 min', difficulty: 'Beginner' },
        { title: 'Account security settings', readTime: '4 min', difficulty: 'Beginner' },
        { title: 'Team member management', readTime: '6 min', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      description: 'AI and machine learning service support',
      articles: [
        { title: 'Setting up AI Business Intelligence', readTime: '8 min', difficulty: 'Intermediate' },
        { title: 'Training custom ML models', readTime: '12 min', difficulty: 'Advanced' },
        { title: 'AI compliance assistant usage', readTime: '6 min', difficulty: 'Intermediate' },
        { title: 'LLM content studio guide', readTime: '10 min', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Cloud infrastructure and DevOps support',
      articles: [
        { title: 'Cloud migration troubleshooting', readTime: '15 min', difficulty: 'Advanced' },
        { title: 'DevOps pipeline configuration', readTime: '10 min', difficulty: 'Intermediate' },
        { title: 'Container deployment issues', readTime: '8 min', difficulty: 'Intermediate' },
        { title: 'Performance optimization tips', readTime: '12 min', difficulty: 'Advanced' }
      ]
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      icon: Shield,
      description: 'Security features and compliance requirements',
      articles: [
        { title: 'Zero Trust implementation guide', readTime: '20 min', difficulty: 'Advanced' },
        { title: 'Security audit preparation', readTime: '15 min', difficulty: 'Intermediate' },
        { title: 'Compliance documentation', readTime: '10 min', difficulty: 'Intermediate' },
        { title: 'Incident response procedures', readTime: '12 min', difficulty: 'Advanced' }
      ]
    },
    {
      id: 'technical-support',
      name: 'Technical Support',
      icon: Zap,
      description: 'Technical issues and troubleshooting',
      articles: [
        { title: 'API integration problems', readTime: '8 min', difficulty: 'Intermediate' },
        { title: 'SDK installation issues', readTime: '5 min', difficulty: 'Beginner' },
        { title: 'Performance troubleshooting', readTime: '10 min', difficulty: 'Intermediate' },
        { title: 'Error code explanations', readTime: '6 min', difficulty: 'Beginner' }
      ]
    },
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: Rocket,
      description: 'New user onboarding and basics',
      articles: [
        { title: 'First-time setup guide', readTime: '10 min', difficulty: 'Beginner' },
        { title: 'Dashboard navigation', readTime: '5 min', difficulty: 'Beginner' },
        { title: 'Creating your first project', readTime: '8 min', difficulty: 'Beginner' },
        { title: 'Essential features overview', readTime: '12 min', difficulty: 'Beginner' }
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-600',
      href: '#chat',
      available: true
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with a technical expert',
      icon: Phone,
      color: 'from-green-500 to-emerald-600',
      href: 'tel:+13024640950',
      available: true
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      color: 'from-purple-500 to-pink-600',
      href: 'mailto:support@ziontechgroup.com',
      available: true
    },
    {
      title: 'Documentation',
      description: 'Browse our comprehensive guides',
      icon: BookOpen,
      color: 'from-amber-500 to-orange-600',
      href: '/documentation',
      available: true
    }
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST', available: true },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST', available: true },
    { day: 'Sunday', hours: 'Emergency support only', available: false }
  ];

  const searchResults = searchQuery 
    ? helpCategories.flatMap(category => 
        category.articles.filter(article => 
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(article => ({ ...category, article }))
      )
    : [];

  const filteredCategories = selectedCategory === 'all' 
    ? helpCategories: anyhelpCategories.filter(category  => category.id === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Help & Support - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Find answers to common questions, contact our support team, and access resources."
        keywords="help, support, customer service, technical support, Zion Tech Group"
        canonical="https://ziontechgroup.com/help"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HelpCircle className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Help & Support
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're here to help you succeed with our services
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Quick Actions</h2>
            <p className="text-slate-300">Get help immediately with these options</p>
          </motion.div>
          
          <div className="grid md: anygrid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index)  => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <a 
                  href={action.href}
                  className="block bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{action.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{action.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Get Help
                    </span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="py-12 bg-slate-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                Search Results for "{searchQuery}"
              </h2>
              <p className="text-slate-300">
                Found {searchResults.length} help articles matching your search
              </p>
            </motion.div>
            
            {searchResults.length > 0 ? (
              <div className="max-w-4xl mx-auto space-y-4">
                {searchResults.map((result, index) => (
                  <motion.div
                    key={`${result.id}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {result.article.title}
                        </h3>
                        <p className="text-slate-300 text-sm">
                          Category: {result.name}
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-slate-400">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {result.article.readTime}
                          </span>
                          <span>{result.article.difficulty}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-cyan-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No help articles found</h3>
                <p className="text-slate-300 mb-6">Try adjusting your search terms or browse our help categories below</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-300"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Help Categories */}
      {!searchQuery && (
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Help Categories
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Browse help articles organized by topic and service
              </p>
            </motion.div>
            
            <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category, index)  => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{category.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Popular Articles:</h4>
                      <div className="space-y-3">
                        {category.articles.slice(0, 3).map((article, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                            <div>
                              <h5 className="text-white font-medium text-sm">{article.title}</h5>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-slate-400 text-xs flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {article.readTime}
                                </span>
                                <span className="text-slate-400 text-xs">{article.difficulty}</span>
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-cyan-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-slate-700 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-600 transition-colors duration-300">
                      View All {category.name} Help
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Support Hours & Contact */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Support Hours
              </h2>
              <div className="space-y-6">
                {supportHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{schedule.day}</h3>
                      <p className="text-slate-300">{schedule.hours}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      schedule.available 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {schedule.available ? 'Available' : 'Limited'}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-white mb-3">Emergency Support</h3>
                <p className="text-slate-300 mb-4">
                  For critical issues outside business hours, we provide emergency support for enterprise customers.
                </p>
                <a 
                  href="tel:+13024640950"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Call Emergency Line
                  <Phone className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Phone Support</h4>
                      <p className="text-slate-300">+1 302 464 0950</p>
                      <p className="text-slate-400 text-sm">Available during support hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email Support</h4>
                      <p className="text-slate-300">support@ziontechgroup.com</p>
                      <p className="text-slate-400 text-sm">Response within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Office Address</h4>
                      <p className="text-slate-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                      <p className="text-slate-400 text-sm">By appointment only</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-3">Response Times</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">General inquiries:</span>
                      <span className="text-slate-400">24-48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Technical issues:</span>
                      <span className="text-slate-400">4-8 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Critical issues:</span>
                      <span className="text-slate-400">1-2 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Additional Resources
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              More ways to get help and learn about our services
            </p>
          </motion.div>
          
          <div className="grid md: anygrid-cols-3 gap-8">
            {[
              {
                title: 'Documentation',
                description: 'Comprehensive guides and API references',
                icon: BookOpen,
                href: '/documentation',
                features: ['User guides', 'API docs', 'Code examples', 'Best practices']
              },
              {
                title: 'Video Tutorials',
                description: 'Step-by-step video guides and walkthroughs',
                icon: Video,
                href: '/tutorials',
                features: ['Getting started', 'Advanced topics', 'Troubleshooting', 'Feature demos']
              },
              {
                title: 'Community Forum',
                description: 'Connect with other users and developers',
                icon: Users,
                href: '/community',
                features: ['User discussions', 'Expert answers', 'Tips & tricks', 'Showcase projects']
              }
            ].map((resource, index)  => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{resource.title}</h3>
                  <p className="text-slate-300 mb-6">{resource.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {resource.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={resource.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Explore {resource.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Still Need Help?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our support team is ready to help you succeed with our services
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
            </a>
            <a 
              href="/documentation" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Browse Documentation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
