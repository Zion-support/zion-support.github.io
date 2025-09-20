import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search;
  MessageCircle,
  BookOpen,
  Settings,
  Shield,
  Cloud,
  Zap,
  Users;
  ChevronRight;
  ChevronDown;
  ExternalLink
} from "lucide-react";
import { SEO } from "../components/SEO";
const helpCategories = [
  {{ id: 'getting-started', title: 'Getting Started' },
  },
  {{ id: 'account', title: 'Account & Billing' },
  },
  {{ id: 'services', title: 'Services & Features' },
  },
  {{ id: 'technical', title: 'Technical Support' },
  },
  {{ id: 'security', title: 'Security & Privacy' },
  },
  ]
const helpSections = [
  {
  id: 'getting-started',title: 'Getting Started',description: 'Learn the basics and get up and running quickly',icon: BookOpen,articles: [
  {
  title: 'Welcome to Zion Tech Group',description: 'Your complete guide to getting started with our services',url: '/help/getting-started/welcome'
},
  {
  title: 'First Steps Setup',description: 'Quick setup guide for new users',url: '/help/getting-started/first-steps'
},
  {
  title: 'Account Configuration',description: 'Configure your account settings and preferences',url: '/help/getting-started/account-config'
},
  ],
  },
  {
  id: 'services',title: 'Services & Features',description: 'Explore our comprehensive range of services',icon: Cloud,articles: [
  {
  title: 'AI Services Overview',description: 'Understanding our AI-powered solutions',url: '/help/services/ai-overview'
},
  {
  title: 'Cloud Infrastructure',description: 'Cloud deployment and management guides',url: '/help/services/cloud-infrastructure'
},
  {
  title: 'Cybersecurity Solutions',description: 'Security features and best practices',url: '/help/services/cybersecurity'
},
  ],
  },
  {
  id: 'technical',title: 'Technical Support',description: 'Technical documentation and troubleshooting',icon: Settings,articles: [
  {
  title: 'API Documentation',description: 'Complete API reference and examples',url: '/help/technical/api-docs'
},
  {
  title: 'Integration Guides',description: 'Step-by-step integration tutorials',url: '/help/technical/integrations'
},
  {
  title: 'Troubleshooting',description: 'Common issues and solutions',url: '/help/technical/troubleshooting'
},
  ],
  },
  {
  id: 'security',title: 'Security & Privacy',description: 'Security features and privacy information',icon: Shield,articles: [
  {
  title: 'Security Best Practices',description: 'How to keep your account secure',url: '/help/security/best-practices'
},
  {
  title: 'Privacy Policy',description: 'Understanding your data privacy',url: '/help/security/privacy-policy'
},
  {
  title: 'Compliance Information',description: 'Security certifications and compliance',url: '/help/security/compliance'
},
  ],
  },
  ]
const popularQuestions = [
  {
  question: 'How do I get started with Zion Tech Group services?',answer: 'Getting started is easy! Simply create an account, choose your service plan, and follow our step-by-step setup guide. Our team is also available for personalized onboarding assistance.';
    category: 'getting-started'
},
  {
  question: 'What payment methods do you accept?',answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise clients. All payments are processed securely through our payment partners.';
    category: 'account'
},
  {
  question: 'How secure are my data and applications?',answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, multi-factor authentication, and regular security audits to protect your data.';
    category: 'security'
},
  {
  question: 'Do you provide 24/7 support?',answer: 'Yes! Our technical support team is available 24/7 to help you with any questions or issues. We offer multiple support channels including live chat, email, and phone support.';
    category: 'technical'
},
  ]
export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedSections, setExpandedSections] = useState(new Set(['getting-started']))
  const toggleSection = (sectionId: string) => {
  const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
  newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const filteredQuestions = popularQuestions.filter(q => ;
    selectedCategory === 'all' || q.category === selectedCategory
)

  const filteredSections = helpSections.filter(section =>
    selectedCategory === 'all' || section.id === selectedCategory
)

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO;
        title="Help Center - Zion Tech Group";
        description="Get help and support for all Zion Tech Group services. Find answers to frequently asked questions, tutorials, and technical documentation.";
        keywords="help center, support, FAQ, documentation, tutorials, technical support";
        canonical="https://ziontechgroup.com/help";
      />
      ;
      {{/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        ;
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div ;
            className="className="text-center";"
            initial={{ opacity: 0, y: 30 },
  }
            animate={{ opacity: 1, y: 0 },
  }
            transition={{ duration: 0.8 },
  }
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-blue-400 bg-clip-text text-transparent">
                Help Center;
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Find answers to your questions, explore tutorials, and get the support you need to succeed with our services.;
            </p>
            ;
            {{/* Search Bar */},
  }
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input;
                  type="text";
                  placeholder="Search for help articles, tutorials, or FAQs...";
                  value={{searchQuery},
  }
                  onChange={{(e) => setSearchQuery(e.target.value)},
  }
                  className="className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan/50 focus:ring-2 focus:ring-zion-cyan/20";"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {{/* Quick Help Section */},
  }
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            className="className="text-center mb-16";"
            initial={{ opacity: 0, y: 20 },
  }
            animate={{ opacity: 1, y: 0 },
  }
            transition={{ duration: 0.8, delay: 0.2 },
  }
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quick Help & Support;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get immediate assistance with common questions and find the resources you need quickly.;
            </p>
          </motion.div>

          {{/* Support Options Grid */},
  }
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
  {
  icon: MessageCircle,title: 'Live Chat',description: 'Get instant help from our support team',color: 'from-blue-500 to-cyan-500'
},
  {
  icon: BookOpen,title: 'Documentation',description: 'Comprehensive guides and tutorials',color: 'from-purple-500 to-pink-500'
},
  {
  icon: Users,title: 'Community',description: 'Connect with other users and experts',color: 'from-green-500 to-emerald-500'
},
  {
  icon: Zap,title: 'Quick Start',description: 'Fast setup guides for new users',color: 'from-orange-500 to-red-500'
},
  ].map((option, index) => (
  <motion.div;
                key={{option.title},
  }
                initial={{ opacity: 0, y: 20 },
  }
                animate={{ opacity: 1, y: 0 },
  }
                transition={{ duration: 0.6, delay: 0.1 * index },
  }
                className="className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer";"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                <p className="text-gray-300 text-sm">{option.description}</p>
              </motion.div>
            ))}
          </div>

          {{/* FAQ Section */},
  }
          <motion.div;
            className="className="mb-16";"
            initial={{ opacity: 0, y: 20 },
  }
            animate={{ opacity: 1, y: 0 },
  }
            transition={{ duration: 0.6, delay: 0.6 },
  }
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

              {{/* Category Filter */},
  }
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <button;
                  onClick={{onClick={() => setSelectedCategory('all')},
  },
  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
  selectedCategory === 'all';
                      ? 'bg-zion-cyan text-white';
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
}`}
                >
                  All Categories;
                </button>
                {helpCategories.map(category => (
  <button;
                    key={{category.id},
  }
                    onClick={{onClick={() => setSelectedCategory(category.id)},
  },
  }
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
  selectedCategory === category.id;
                        ? 'bg-zion-cyan text-white';
                        : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
}`}
                  >
                    {{category.title},
  }
                  </button>
                ))}
              </div>

              {{/* FAQ Items */},
  }
              <div className="space-y-4">
                {filteredQuestions.map((item, index) => (
  <motion.div;
                    key={{index},
  }
                    initial={{ opacity: 0, y: 20 },
  }
                    animate={{ opacity: 1, y: 0 },
  }
                    transition={{ duration: 0.6, delay: 0.1 * index },
  }
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

      {{/* Main Content */},
  }
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {{/* Help Sections */},
  }
            <div className="lg:col-span-2">
              <motion.div;
                initial={{ opacity: 0, x: -20 },
  }
                animate={{ opacity: 1, x: 0 },
  }
                transition={{ duration: 0.6, delay: 0.3 },
  }
              >
                <h2 className="text-2xl font-bold text-white mb-6">Help Articles & Tutorials</h2>
                ;
                <div className="space-y-6">
                  {filteredSections.map((section, index) => (
  <motion.div;
                      key={{section.id},
  }
                      initial={{ opacity: 0, y: 20 },
  }
                      animate={{ opacity: 1, y: 0 },
  }
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 },
  }
                      className="className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden";"
                    >
                      <button;
                        onClick={{onClick={() => toggleSection(section.id)},
  },
  }
                        className="className="w-full p-6 text-left hover:bg-zion-slate-dark/70 transition-colors";"
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
  <motion.div;
                            initial={{ opacity: 0, height: 0 },
  }
                            animate={{ opacity: 1, height: 'auto' },
  }
                            exit={{ opacity: 0, height: 0 },
  }
                            transition={{ duration: 0.3 },
  }
                            className="className="border-t border-cyan-400/20";"
                          >
                            <div className="p-6 space-y-4">
                              {section.articles.map((article, articleIndex) => (
  <motion.div;
                                  key={{article.title},
  }
                                  initial={{ opacity: 0, x: -20 },
  }
                                  animate={{ opacity: 1, x: 0 },
  }
                                  transition={{ duration: 0.3, delay: articleIndex * 0.1 },
  }
                                  className="className="group";"
                                >
                                  <a;
                                    href={{article.url},
  }
                                    className="className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors";"
                                  >
                                    <div>
                                      <h4 className="text-lg font-medium text-white group-hover:text-cyan-300 transition-colors">
                                        {{article.title},
  }
                                      </h4>
                                      <p className="text-gray-300 text-sm">{article.description}</p>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
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

            {{/* Sidebar */},
  }
            <div className="lg:col-span-1">
              <motion.div;
                initial={{ opacity: 0, x: 20 },
  }
                animate={{ opacity: 1, x: 0 },
  }
                transition={{ duration: 0.6, delay: 0.4 },
  }
                className="className="space-y-6";"
              >
                {{/* Contact Support */},
  }
                <div className="bg-gradient-to-r from-zion-cyan to-blue-500 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Need More Help?</h3>
                  <p className="text-blue-100 mb-6">
                    Can't find what you're looking for? Our support team is here to help.;
                  </p>
                  <button className="w-full py-3 bg-white text-zion-cyan font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                    Contact Support;
                  </button>
                </div>

                {{/* Quick Links */},
  }
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    {[
  {{ title: 'API Documentation', url: '/docs/api' },
  },
  {{ title: 'Status Page', url: '/status' },
  },
  {{ title: 'Release Notes', url: '/releases' },
  },
  {{ title: 'Security', url: '/security' },
  },
  ].map((link, index) => (
  <a;
                        key={{index},
  }
                        href={{link.url},
  }
                        className="className="block text-cyan-300 hover:text-cyan-200 transition-colors";"
                      >
                        {{link.title},
  }
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
