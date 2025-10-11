import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { Phone, Mail, MessageSquare, Search, Clock, Users, Award, Zap, Brain, Shield, Code, BarChart, MessageSquare as Chat, Eye, Cpu, Target, Lock, BarChart3, FileText, Bot, Calculator, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react'
const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const supportCategories = [
    { id: 'all', name: 'All Topics', icon: Search, count: 45 },
    { id: 'getting-started', name: 'Getting Started', icon: Zap, count: 12 },
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: 8 },
    { id: 'billing', name: 'Billing & Pricing', icon: CreditCard, count: 6 },
    { id: 'technical', name: 'Technical Support', icon: Code, count: 10 },
    { id: 'account', name: 'Account Management', icon: Users, count: 5 },
    { id: 'api', name: 'API & Integration', icon: BarChart, count: 4 }
  ]
  const faqs = [
    {
      id: 1,
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Contact our team at +1 302 464 0950 or email kleber@ziontechgroup.com for a free consultation. We\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'getting-started'
    },
    {
      id: 2,
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including Machine Learning, Natural Language Processing, Computer Vision, AI Automation, Quantum AI Computing, and AI Cybersecurity. We also provide Micro SAAS solutions for immediate deployment.',
      category: 'ai-services'
    },
    {
      id: 3,
      question: 'How much do your services cost?',
      answer: 'Our pricing starts at $299/month for the Starter plan. We offer flexible pricing based on your specific needs. Contact us for a custom quote tailored to your requirements.',
      category: 'billing'
    },
    {
      id: 4,
      question: 'Do you provide 24/7 technical support?',
      answer: 'Yes! We offer 24/7 technical support for all our clients. Our expert team is always available to help with any technical issues or questions you may have.',
      category: 'technical'
    },
    {
      id: 5,
      question: 'How do I integrate your AI services with my existing systems?',
      answer: 'Our team provides comprehensive integration support. We work with your existing infrastructure and provide APIs, SDKs, and custom integration solutions to ensure seamless implementation.',
      category: 'api'
    },
    {
      id: 6,
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple AI implementations can take 2-4 weeks, while complex enterprise transformations may take 3-6 months. We provide detailed timelines during our consultation.',
      category: 'getting-started'
    }
  ]
  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our AI experts',
      contact: '+1 302 464 0950',
      availability: '24/7 Available',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses via email',
      contact: 'kleber@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'text-blue-400'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Instant support through our chat system',
      contact: 'Start Chat',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-purple-400'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a consultation with our team',
      contact: 'Book Now',
      availability: 'Flexible scheduling',
      color: 'text-cyan-400'
    }
  ]
  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: FileText,
      link: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all services',
      icon: Eye,
      link: '/tutorials'
    },
    {
      title: 'Case Studies',
      description: 'Real-world examples and success stories',
      icon: BarChart,
      link: '/case-studies'
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      link: '/api-docs'
    },
    {
      title: 'Best Practices',
      description: 'Industry best practices and guidelines',
      icon: Award,
      link: '/best-practices'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: Users,
      link: '/community'
    }
  ]
  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)
  const searchResults = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs
  return (
    <React.Fragment>
      <SEOOptimizer
        title="Support Center - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Find answers to common questions, contact our team, and access comprehensive resources."
        keywords={['support', 'help', 'FAQ', 'technical support', 'customer service', 'AI support']}
        canonicalUrl="https://ziontechgroup.com/support"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">
              Support Center
  
            <p className="text-xl text-cyan-400 mb-8">
              We're here to help you succeed with AI,
  
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Get instant answers to your questions, access comprehensive resources, 
              and connect with our expert support team.
          {/* Search Section */}
          <section className="mb-16">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none"
                />
          {/* Support Channels */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Get Support
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <channel.icon className={`w-12 h-12 mx-auto mb-4 ${channel.color}`} />
                  <h3 className="text-xl font-bold text-white mb-2">{channel.title}
                  <p className="text-gray-300 mb-4">{channel.description}
                  <div className="text-cyan-400 font-semibold mb-2">{channel.contact}
                  <div className="text-gray-400 text-sm">{channel.availability}
              ))}
          {/* FAQ Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Browse by Category
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
              {supportCategories.map((category) => (
                <$2 />
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-lg text-center transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-slate-900'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  <category.icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm font-semibold">{category.name}
                  <div className="text-xs opacity-75">{category.count} topics
              ))}
          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Frequently Asked Questions
            <div className="max-w-4xl mx-auto space-y-4">
              {searchResults.map((faq) => (
                <div key={faq.id} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}
                  <p className="text-gray-300 leading-relaxed">{faq.answer}
              ))}
          {/* Resources Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Helpful Resources
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <$2 />
                  key={index}
                  to={resource.link}
                  className="cyber-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <resource.icon className="w-8 h-8 text-cyan-400 mr-4" />
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  <p className="text-gray-300">{resource.description}
              ))}
          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our expert team is ready to assist you with any questions or issues
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <$2 />
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
  
                <$2 />
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-secondary px-8 py-4 text-lg font-semibold inline-flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
  
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  ),
}
export default SupportPage</a>
  </a>
  </p>
  </h2>
  </h2>
  </h2>
  </h2>
  </p>
  </h1>
  </SEOOptimizer>
</div></div></div></div></div></div></div></div></div></div></div></div></div></p></p></p></p></h3></h3></h3></section></section></section></section></section></section>