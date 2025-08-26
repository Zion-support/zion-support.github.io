import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
import React from 'react';
import { 
  HelpCircle, 
=======
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
=======
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  Users, 
  Settings, 
  Shield, 
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  FileText, 
  Video, 
  Headphones, 
  Mail, 
  Phone,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ExternalLink,
import { Helmet } from 'react-helmet-async';
=======
import { motion } from 'framer-motion';
=======
import { SEOHead } from '../components/SEOHead';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Zap, 
  Brain, 
  Cloud, 
  Lock, 
  Cpu, 
  Database, 
  Network, 
  Code, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Rocket, 
  Clock, 
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Building,
  CreditCard
} from 'lucide-react';
=======
=======
import React, { useState } from 'react';
import { Search, BookOpen, Users, Shield, CreditCard, Settings, HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
=======
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Search, BookOpen, MessageCircle, Phone, Mail, FileText, Users, Settings, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Phone, Mail, ArrowRight } from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
=======
import { motion } from 'framer-motion';
=======
import { motion } from 'framer-motion';
=======
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  QuestionMarkCircleIcon, 
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: BookOpenIcon },
    { id: 'getting-started', name: 'Getting Started', icon: QuestionMarkCircleIcon },
    { id: 'ai-services', name: 'AI Services', icon: ChatBubbleLeftRightIcon },
    { id: 'technical', name: 'Technical Support', icon: DocumentTextIcon },
    { id: 'billing', name: 'Billing & Pricing', icon: DocumentTextIcon },
    { id: 'account', name: 'Account Management', icon: QuestionMarkCircleIcon }
  ];


  const helpCategories = [
    {
      category: 'getting-started',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or call us at +1 (302) 464-0950. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
    },
    {
      category: 'getting-started',
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and government. Our AI and technology solutions are adaptable to any sector looking to modernize and optimize their operations.'
    },
    {
      category: 'ai-services',
      question: 'How does your AI Autonomous Business Manager work?',
      answer: 'Our AI Autonomous Business Manager uses advanced machine learning algorithms to analyze your business processes, identify optimization opportunities, and automatically implement improvements. It continuously learns and adapts to your business needs.'
    },
    {
      category: 'ai-services',
      question: 'What quantum computing services do you offer?',
      answer: 'We offer quantum neural network platforms, quantum financial trading solutions, and quantum cloud infrastructure services. These cutting-edge technologies provide unprecedented computational power for complex problem-solving.'
    },
    {
      category: 'technical',
      question: 'Do you provide 24/7 technical support?',
      answer: 'Yes, we provide round-the-clock technical support for all our enterprise clients. Our dedicated support team is available via phone, email, and our support portal to ensure your systems run smoothly.'
    },
    {
      category: 'technical',
      question: 'What cybersecurity measures do you implement?',
      answer: 'We implement enterprise-grade cybersecurity including SOC2 compliance automation, advanced threat detection, AI-powered security monitoring, and comprehensive security audits to protect your data and systems.'
    },
    {
      category: 'billing',
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including subscription-based services, project-based pricing, and enterprise licensing. Contact our sales team for a customized quote based on your specific needs and requirements.'
    },
    {
      category: 'account',
      question: 'How do I manage my account and services?',
      answer: 'You can manage your account through our client portal where you can view service status, access documentation, submit support tickets, and manage billing. Our team will provide you with access credentials upon service activation.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    activeCategory === 'all' || faq.category === activeCategory
  ).filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const contactMethods = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: PhoneIcon,
      contact: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: EnvelopeIcon,
      contact: 'support@ziontechgroup.com',
      href: 'mailto:support@ziontechgroup.com'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help from our AI assistant',
      icon: ChatBubbleLeftRightIcon,
      contact: 'Available 24/7',
      href: '#'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: DocumentTextIcon,
      href: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: VideoCameraIcon,
      href: '/webinars'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable articles and solutions',
      icon: BookOpenIcon,
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions, access our knowledge base, and get the support you need to succeed with Zion Tech Group.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-8"
          >
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, and solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-200"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {method.description}
                </p>
                <a
                  href={method.href}
                  className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200"
                >
                  {method.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {resource.description}
                </p>
                <a
                  href={resource.href}
                  className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200"
                >
                  Access Resource
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

=======
          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button asChild variant="outline" className="w-full">
                      <Link to={category.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6 mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button asChild className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/api-docs">View API Documentation</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/blog">Browse Tutorials</Link>
              </Button>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg">
                    <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-zion-cyan">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-zion-slate-light">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-8 max-w-2xl mx-auto">
              <MessageCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Still Need Help?</h3>
              <p className="text-zion-slate-light mb-6">
                Our support team is here to help you with any questions or issues you may have.
              </p>
              <div className="space-x-4">
                <Button asChild className="bg-zion-purple hover:bg-zion-purple-dark">
                  <Link to="/contact">Contact Support</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/community">Ask Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
=======
};

export default HelpCenter;
=======
// CreditCard icon component since it's not in lucide-react
function CreditCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
=======
  const quickLinks = [
    { title: 'Contact Support', href: '/contact', icon: MessageCircle, description: 'Get in touch with our support team' },
    { title: 'API Documentation', href: '/api-docs', icon: FileText, description: 'Developer resources and API guides' },
    { title: 'Community Forum', href: '/community', icon: Users, description: 'Connect with other users' },
    { title: 'Blog & Updates', href: '/blog', icon: FileText, description: 'Latest news and platform updates' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Help Center | Zion Tech Group" 
        description="Get help and support for using the Zion Tech Group platform. Find answers to frequently asked questions and contact our support team."
        keywords="help, support, FAQ, customer service, Zion Tech Group"
        canonical="https://ziontechgroup.com/help"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            Find answers to common questions and get the support you need to make the most of our platform.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link key={link.title} to={link.href}>
                <Card className="h-full hover:bg-zion-blue-dark/50 transition-colors cursor-pointer border-zion-blue-light">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="h-5 w-5 text-zion-cyan" />
                      <CardTitle className="text-white text-lg">{link.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light">
                      {link.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="border-zion-blue-light">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-6 w-6 text-zion-cyan" />
                    <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-zion-slate-light hover:text-white">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-zion-slate-light">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 text-center">
          <Card className="border-zion-blue-light bg-zion-blue-dark/50">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Still Need Help?</CardTitle>
              <CardDescription className="text-zion-slate-light text-lg">
                Can't find what you're looking for? Our support team is here to help.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple/90 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Support
                </Link>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-blue-light text-white font-medium rounded-lg hover:bg-zion-blue-light/20 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Support
                </a>
              </div>
              <p className="text-zion-slate-light">
                Response time: Usually within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
