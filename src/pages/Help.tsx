import React from "react"
import { SEO } from "../components/SEO"
export default function Help() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-24">
      <SEO title="Help Center - Zion Tech Group" description="Support resources and FAQs for Zion Tech Group." />
      <div className="text-center text-white max-w-2xl px-6">
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>
        <p className="text-lg text-gray-300">Find answers to common questions and resources to get help.</p>
      </div>
    </div>
  )
}

import React, { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { Link } from "react-router-dom"
import { 
  Search
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Video, 
  FileText
  HelpCircle
  Brain
  Cloud
  Shield
  Zap
  Users
  Globe
  ArrowRight
  ExternalLink
  ChevronRight
} from "lucide-react"
export default function Help() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const helpCategories = [
    {
      id: 'getting-started',tit,
  l: e: 'Getting Started',descripti,
  o: n: 'Learn the basics and get up and running quickly',ic,
  o: n: BookOpen,col,
  o: r: 'from-blue-500 to-cyan-500',articl,
  e: s: [
        {
          titl,
  e: 'Welcome to Zion Tech Group',descripti,
  o: n: 'Your first steps with our platform and services',hr,
  e: f: '/help/getting-started/welcome',readTi,
  m: e: '3 min read'
        }, {
          tit,
  l: e: 'Setting Up Your Account',descripti,
  o: n: 'Complete guide to account creation and configuration',hr,
  e: f: '/help/getting-started/account-setup',readTi,
  m: e: '5 min read'
        }, {
          tit,
  l: e: 'First Project Setup',descripti,
  o: n: 'How to create and configure your first project',hr,
  e: f: '/help/getting-started/first-project',readTi,
  m: e: '7 min read'
        }
      ]
    }, {
      id: 'ai-services',tit,
  l: e: 'AI Services',descripti,
  o: n: 'Everything you need to know about our AI solutions',ic,
  o: n: Brain,col,
  o: r: 'from-purple-500 to-pink-500',articl,
  e: s: [
        {
          titl,
  e: 'AI Model Training Guide',descripti,
  o: n: 'Step-by-step guide to training custom AI models',hr,
  e: f: '/help/ai-services/model-training',readTi,
  m: e: '10 min read'
        }, {
          tit,
  l: e: 'AI Integration Best Practices',descripti,
  o: n: 'Best practices for integrating AI into your workflows',hr,
  e: f: '/help/ai-services/integration',readTi,
  m: e: '8 min read'
        }, {
          tit,
  l: e: 'AI Performance Optimization',descripti,
  o: n: 'Tips for optimizing AI model performance',hr,
  e: f: '/help/ai-services/optimization',readTi,
  m: e: '6 min read'
        }
      ]
    }, {
      id: 'cloud-infrastructure',tit,
  l: e: 'Cloud & Infrastructure',descripti,
  o: n: 'Cloud setup, management, and optimization guides'
      ic,
  o: n: Cloud,col,
  o: r: 'from-cyan-500 to-blue-500',articl,
  e: s: [
        {
          titl,
  e: 'Cloud Migration Guide',descripti,
  o: n: 'Complete guide to migrating to the cloud',hr,
  e: f: '/help/cloud/migration',readTi,
  m: e: '15 min read'
        }, {
          tit,
  l: e: 'DevOps Pipeline Setup',descripti,
  o: n: 'Setting up CI/CD pipelines and automation',hr,
  e: f: '/help/cloud/devops',readTi,
  m: e: '12 min read'
        }, {
          tit,
  l: e: 'Cost Optimization Strategies',descripti,
  o: n: 'Reduce cloud costs while maintaining performance',hr,
  e: f: '/help/cloud/cost-optimization',readTi,
  m: e: '8 min read'
        }
      ]
    }, {
      id: 'security',tit,
  l: e: 'Security & Compliance',descripti,
  o: n: 'Security best practices and compliance guidance',ic,
  o: n: Shield,col,
  o: r: 'from-red-500 to-pink-500',articl,
  e: s: [
        {
          titl,
  e: 'Security Best Practices',descripti,
  o: n: 'Essential security measures for your systems',hr,
  e: f: '/help/security/best-practices',readTi,
  m: e: '10 min read'
        }, {
          tit,
  l: e: 'Compliance Frameworks',descripti,
  o: n: 'Understanding SOC2, ISO, and other standards'
          hr,
  e: f: '/help/security/compliance',readTi,
  m: e: '12 min read'
        }, {
          tit,
  l: e: 'Incident Response Guide',descripti,
  o: n: 'What to do when security incidents occur',hr,
  e: f: '/help/security/incident-response',readTi,
  m: e: '8 min read'
        }
      ]
    }, {
      id: 'troubleshooting',tit,
  l: e: 'Troubleshooting',descripti,
  o: n: 'Common issues and their solutions',ic,
  o: n: HelpCircle,col,
  o: r: 'from-orange-500 to-red-500',articl,
  e: s: [
        {
          titl,
  e: 'Common Error Messages',descripti,
  o: n: 'Understanding and resolving common errors',hr,
  e: f: '/help/troubleshooting/errors',readTi,
  m: e: '6 min read'
        }, {
          tit,
  l: e: 'Performance Issues',descripti,
  o: n: 'Diagnosing and fixing performance problems',hr,
  e: f: '/help/troubleshooting/performance',readTi,
  m: e: '8 min read'
        }, {
          tit,
  l: e: 'Integration Problems',descripti,
  o: n: 'Solving integration and connectivity issues',hr,
  e: f: '/help/troubleshooting/integration',readTi,
  m: e: '7 min read'
        }
      ]
    }
  ]
  const popularArticles = [
    {
      tit,
  l: e: 'Quick Start Guide',descripti,
  o: n: 'Get up and running in 10 minutes',hr,
  e: f: '/help/quick-start',catego,
  r: y: 'Getting Started',readTi,
  m: e: '10 min read'
    }, {
      tit,
  l: e: 'API Documentation',descripti,
  o: n: 'Complete API reference and examples',hr,
  e: f: '/help/api-docs',catego,
  r: y: 'Technical',readTi,
  m: e: '15 min read'
    }, {
      tit,
  l: e: 'Billing & Pricing FAQ',descripti,
  o: n: 'Answers to common billing questions',hr,
  e: f: '/help/billing-faq',catego,
  r: y: 'Billing',readTi,
  m: e: '5 min read'
    }, {
      tit,
  l: e: 'Security Checklist',descripti,
  o: n: 'Essential security measures checklist',hr,
  e: f: '/help/security-checklist',catego,
  r: y: 'Security',readTi,
  m: e: '8 min read'
    }
  ]
  const supportOptions = [
    {
      tit,
  l: e: 'Live Chat',descripti,
  o: n: 'Get instant help from our support team',ic,
  o: n: MessageCircle,acti,
  o: n: 'Start Chat',hr,
  e: f: '#',availab,
  l: e: true
    }, {
      tit,
  l: e: 'Phone Support',descripti,
  o: n: 'Speak directly with our experts',ic,
  o: n: Phone,acti,
  o: n: 'Call Now',hr,
  e: f: 'te,
  l:+13024640950',availab,
  l: e: true
    }, {
      tit,
  l: e: 'Email Support',descripti,
  o: n: 'Send us a detailed message',ic,
  o: n: Mail,acti,
  o: n: 'Send Email',hr,
  e: f: 'mailt,
  o:support@ziontechgroup.com',availab,
  l: e: true
    }, {
      tit,
  l: e: 'Video Tutorials',descripti,
  o: n: 'Step-by-step video guides',ic,
  o: n: Video,acti,
  o: n: 'Watch Videos',hr,
  e: f: '/help/videos',availab,
  l: e: true
    }
  ]
  const filteredCategories = helpCategories.filter(category () () => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) return false
    if (if (searchQuery) {) {
      return category.articles.some(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    return true
  })
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help with Zion Tech Group's services. Find documentation, tutorials, and support options."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center";"
          >
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              How Can We <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Help?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to your questions, learn how to use our services, and get the support 
              you need to succeed with Zion Tech Group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="max-w-3xl mx-auto";"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-cyan-400,
  focu: s:ring-2 focu,
  s:ring-cyan-400/20 transition-all duration-200 text-lg";"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="flex flex-wrap justify-center gap-3";"
          >
            <button
              onClick={onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-400 text-white border-cyan-400'
                  : 'bg-slate-800/50 text-gray-300 border-slate-600/50,
  hove: r: border-cyan-400/50 hove,
  r:text-cyan-400'
              }`}
            >
              All Categories
            </button>
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-400 text-white border-cyan-400'
                    : 'bg-slate-800/50 text-gray-300 border-slate-600/50,
  hove: r: border-cyan-400/50 hove,
  r:text-cyan-400'
                }`}
              >
                {category.title}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Popular Articles</h2>
            <p className="text-xl text-gray-300">Most frequently accessed help content</p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 }
                className="className="group";"
              >
                <Link to={article.href}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50,
  hove: r: border-cyan-400/50 transition-all duration-300 hove,
  r:scale-105 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hov,
  e: r:text-cyan-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center text-cyan-400 group-hov,
  e: r: text-cyan-300 transition-colors duration-200 mt-4">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hove,
  r:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={ opaci,
  t: y: 0, y: 20 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8, del,
  a: y: categoryIndex * 0.1 }
              className="className="mb-16";"
            >
              <div className="flex items-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mr-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                  <p className="text-xl text-gray-300">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
                {category.articles.map((article, articleIndex) => (
                  <motion.div
                    key={article.title}
                    initial={ opaci,
  t: y: 0, y: 20 }
                    whileInView={ opaci,
  t: y: 1, y: 0 }
                    transition={ durati,
  o: n: 0.8, del,
  a: y: (categoryIndex * 0.1) + (articleIndex * 0.05) }
                    className="className="group";"
                  >
                    <Link to={article.href}>
                      <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50,
  hove: r: border-cyan-400/50 transition-all duration-300 hove,
  r:scale-105 h-full">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-gray-400 text-xs">{article.readTime}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hov,
  e: r: text-cyan-400 transition-colors duration-200" />
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-3 group-hove,
  r:text-cyan-400 transition-colors duration-200">
                          {article.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Need More Help?</h2>
            <p className="text-xl text-gray-300">
              Our support team is here to help you succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 }
                className="className="text-center";"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50,
  hove: r: border-cyan-400/50 transition-all duration-300 hove,
  r:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-xl mb-4">
                    <option.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3">{option.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  
                  <a
                    href={option.href}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      option.available
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white,
  hove: r: from-cyan-500,
  hove: r:to-blue-600 hove,
  r:scale-105'
                        : 'bg-slate-700/50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {option.action}, {option.href.startsWith('http') && <ExternalLink className="w-4 h-4 ml-2" />}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our expert support team is ready to help 
              you with any questions or issues you may have.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-cyan-500,
  hove: r:to-blue-600 transition-all duration-200,
  hove: r:scale-105";"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
              <a
                href="t,
  e: l:+13024640950"
                className="className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg,
  hove: r:bg-cyan-400 hove,
  r:text-white transition-all duration-200";"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}