import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search
  MessageCircle, 
  BookOpen, 
  Settings, 
  Shield, 
  Cloud, 
  Zap, 
  Users
  ChevronRight
  ChevronDown
  ExternalLink
} from "lucide-react"
import { SEO } from "../components/SEO"
const helpCategories = [
  { id: 'getting-started', tit,
  l: e: 'Getting Started' }, { id: 'account', tit,
  l: e: 'Account & Billing' }, { id: 'services', tit,
  l: e: 'Services & Features' }, { id: 'technical', tit,
  l: e: 'Technical Support' }, { id: 'security', tit,
  l: e: 'Security & Privacy' }
]
const helpSections = [
  {
    id: 'getting-started',tit,
  l: e: 'Getting Started',descripti,
  o: n: 'Learn the basics and get up and running quickly',ic,
  o: n: BookOpen,articl,
  e: s: [
      {
        titl,
  e: 'Welcome to Zion Tech Group',descripti,
  o: n: 'Your complete guide to getting started with our services',u,
  r: l: '/help/getting-started/welcome'
      }, {
        tit,
  l: e: 'First Steps Setup',descripti,
  o: n: 'Quick setup guide for new users',u,
  r: l: '/help/getting-started/first-steps'
      }, {
        tit,
  l: e: 'Account Configuration',descripti,
  o: n: 'Configure your account settings and preferences',u,
  r: l: '/help/getting-started/account-config'
      }
    ]
  }, {
    id: 'services',tit,
  l: e: 'Services & Features',descripti,
  o: n: 'Explore our comprehensive range of services',ic,
  o: n: Cloud,articl,
  e: s: [
      {
        titl,
  e: 'AI Services Overview',descripti,
  o: n: 'Understanding our AI-powered solutions',u,
  r: l: '/help/services/ai-overview'
      }, {
        tit,
  l: e: 'Cloud Infrastructure',descripti,
  o: n: 'Cloud deployment and management guides',u,
  r: l: '/help/services/cloud-infrastructure'
      }, {
        tit,
  l: e: 'Cybersecurity Solutions',descripti,
  o: n: 'Security features and best practices',u,
  r: l: '/help/services/cybersecurity'
      }
    ]
  }, {
    id: 'technical',tit,
  l: e: 'Technical Support',descripti,
  o: n: 'Technical documentation and troubleshooting',ic,
  o: n: Settings,articl,
  e: s: [
      {
        titl,
  e: 'API Documentation',descripti,
  o: n: 'Complete API reference and examples',u,
  r: l: '/help/technical/api-docs'
      }, {
        tit,
  l: e: 'Integration Guides',descripti,
  o: n: 'Step-by-step integration tutorials',u,
  r: l: '/help/technical/integrations'
      }, {
        tit,
  l: e: 'Troubleshooting',descripti,
  o: n: 'Common issues and solutions',u,
  r: l: '/help/technical/troubleshooting'
      }
    ]
  }, {
    id: 'security',tit,
  l: e: 'Security & Privacy',descripti,
  o: n: 'Security features and privacy information',ic,
  o: n: Shield,articl,
  e: s: [
      {
        titl,
  e: 'Security Best Practices',descripti,
  o: n: 'How to keep your account secure',u,
  r: l: '/help/security/best-practices'
      }, {
        tit,
  l: e: 'Privacy Policy',descripti,
  o: n: 'Understanding your data privacy',u,
  r: l: '/help/security/privacy-policy'
      }, {
        tit,
  l: e: 'Compliance Information',descripti,
  o: n: 'Security certifications and compliance',u,
  r: l: '/help/security/compliance'
      }
    ]
  }
]
const popularQuestions = [
  {
    questi,
  o: n: 'How do I get started with Zion Tech Group services?',answ,
  e: r: 'Getting started is easy! Simply create an account, choose your service plan, and follow our step-by-step setup guide. Our team is also available for personalized onboarding assistance.'
    catego,
  r: y: 'getting-started'
  }, {
    questi,
  o: n: 'What payment methods do you accept?',answ,
  e: r: 'We accept all major credit cards, PayPal, and bank transfers for enterprise clients. All payments are processed securely through our payment partners.'
    catego,
  r: y: 'account'
  }, {
    questi,
  o: n: 'How secure are my data and applications?',answ,
  e: r: 'Security is our top priority. We implement enterprise-grade security measures including encryption, multi-factor authentication, and regular security audits to protect your data.'
    catego,
  r: y: 'security'
  }, {
    questi,
  o: n: 'Do you provide 24/7 support?',answ,
  e: r: 'Yes! Our technical support team is available 24/7 to help you with any questions or issues. We offer multiple support channels including live chat, email, and phone support.'
    catego,
  r: y: 'technical'
  }
]
export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedSections, setExpandedSections] = useState(new Set(['getting-started']))
  const toggleSection = (section,
  I: d: string) () => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const filteredQuestions = popularQuestions.filter(q => 
    selectedCategory === 'all' || q.category === selectedCategory
  )

  const filteredSections = helpSections.filter(section =>
    selectedCategory === 'all' || section.id === selectedCategory
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="Help Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers to frequently asked questions, tutorials, and technical documentation."
        keywords="help center, support, FAQ, documentation, tutorials, technical support"
        canonical="htt,
  p: s://ziontechgroup.com/help"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light" />
        <div className="absolute inset-0 bg-[url('da,
  t: a:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div 
            className="className="text-center";"
            initial={ opacit,
  y: 0, y: 30 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <h1 className="text-5xl,
  m: d: text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-blue-400 bg-clip-text text-transparent">
                Help Center
              </span>
            </h1>
            <p className="text-xl m,
  d:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Find answers to your questions, explore tutorials, and get the support you need to succeed with our services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-zion-cyan/50,
  focu: s:ring-2 focu,
  s:ring-zion-cyan/20";"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
          >
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-6">
              Quick Help & Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get immediate assistance with common questions and find the resources you need quickly.
            </p>
          </motion.div>

          {/* Support Options Grid */}
          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-4 gap-8 mb-16">
            {[
              {
                ico,
  n: MessageCircle,tit,
  l: e: 'Live Chat',descripti,
  o: n: 'Get instant help from our support team',col,
  o: r: 'from-blue-500 to-cyan-500'
              }, {
                ic,
  o: n: BookOpen,tit,
  l: e: 'Documentation',descripti,
  o: n: 'Comprehensive guides and tutorials',col,
  o: r: 'from-purple-500 to-pink-500'
              }, {
                ic,
  o: n: Users,tit,
  l: e: 'Community',descripti,
  o: n: 'Connect with other users and experts',col,
  o: r: 'from-green-500 to-emerald-500'
              }, {
                ic,
  o: n: Zap,tit,
  l: e: 'Quick Start',descripti,
  o: n: 'Fast setup guides for new users',col,
  o: r: 'from-orange-500 to-red-500'
              }
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={ opaci,
  t: y: 0, y: 20 }
                animate={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: 0.1 * index }
                className="className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center,
  hove: r: bg-white/20 hove,
  r:border-white/40 transition-all duration-300 group cursor-pointer";"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                <p className="text-gray-300 text-sm">{option.description}</p>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            className="className="mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 }
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <button
                  onClick={onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/10 text-zion-slate-light,
  hove: r:bg-white/20'
                  }`}
                >
                  All Categories
                </button>
                {helpCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-zion-cyan text-white'
                        : 'bg-white/10 text-zion-slate-light,
  hove: r:bg-white/20'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {filteredQuestions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={ opaci,
  t: y: 0, y: 20 }
                    animate={ opaci,
  t: y: 1, y: 0 }
                    transition={ durati,
  o: n: 0.6, del,
  a: y: 0.1 * index }
                    className="className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6";"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                    <p className="text-gray-300">{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid l,
  g:grid-cols-3 gap-8">
            {/* Help Sections */}
            <div className="lg: col-span-2">
              <motion.div
                initial={ opacit,
  y: 0, x: -20 }
                animate={ opaci,
  t: y: 1, x: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: 0.3 }
              >
                <h2 className="text-2xl font-bold text-white mb-6">Help Articles & Tutorials</h2>
                
                <div className="space-y-6">
                  {filteredSections.map((section, index) => (
                    <motion.div
                      key={section.id}
                      initial={ opaci,
  t: y: 0, y: 20 }
                      animate={ opaci,
  t: y: 1, y: 0 }
                      transition={ durati,
  o: n: 0.6, del,
  a: y: 0.3 + index * 0.1 }
                      className="className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden";"
                    >
                      <button
                        onClick={onClick={() => toggleSection(section.id)}
                        className="className="w-full p-6 text-left,
  hove: r:bg-zion-slate-dark/70 transition-colors";"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                              <section.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                              <p className="text-cyan-300">{section.description}</p>
                            </div>
                          </div>
                          {expandedSections.has(section.id) ? (
                            <ChevronDown className="w-5 h-5 text-cyan-400" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-cyan-400" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {expandedSections.has(section.id) && (
                          <motion.div
                            initial={ opaci,
  t: y: 0, heig,
  h: t: 0 }
                            animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' }
                            exit={ opaci,
  t: y: 0, heig,
  h: t: 0 }
                            transition={ durati,
  o: n: 0.3 }
                            className="className="border-t border-cyan-400/20";"
                          >
                            <div className="p-6 space-y-4">
                              {section.articles.map((article, articleIndex) => (
                                <motion.div
                                  key={article.title}
                                  initial={ opaci,
  t: y: 0, x: -20 }
                                  animate={ opaci,
  t: y: 1, x: 0 }
                                  transition={ durati,
  o: n: 0.3, del,
  a: y: articleIndex * 0.1 }
                                  className="className="group";"
                                >
                                  <a
                                    href={article.url}
                                    className="className="flex items-center justify-between p-4 rounded-lg,
  hove: r: bg-white/5 transition-colors";"
                                  >
                                    <div>
                                      <h4 className="text-lg font-medium text-white group-hove,
  r:text-cyan-300 transition-colors">
                                        {article.title}
                                      </h4>
                                      <p className="text-gray-300 text-sm">{article.description}</p>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-400 group-hov,
  e: r:text-cyan-400 transition-colors" />
                                  </a>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg: col-span-1">
              <motion.div
                initial={ opacit,
  y: 0, x: 20 }
                animate={ opaci,
  t: y: 1, x: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 }
                className="className="space-y-6";"
              >
                {/* Contact Support */}
                <div className="bg-gradient-to-r from-zion-cyan to-blue-500 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Need More Help?</h3>
                  <p className="text-blue-100 mb-6">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <button className="w-full py-3 bg-white text-zion-cyan font-semibold rounded-lg,
  hove: r:bg-gray-100 transition-colors">
                    Contact Support
                  </button>
                </div>

                {/* Quick Links */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    {[
                      { tit,
  l: e: 'API Documentation', u,
  r: l: '/docs/api' }, { tit,
  l: e: 'Status Page', u,
  r: l: '/status' }, { tit,
  l: e: 'Release Notes', u,
  r: l: '/releases' }, { tit,
  l: e: 'Security', u,
  r: l: '/security' }
                    ].map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="className="block text-cyan-300,
  hove: r:text-cyan-200 transition-colors";"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
