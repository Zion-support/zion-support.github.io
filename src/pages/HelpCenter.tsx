=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, BookOpen, MessageSquare, Phone, Mail, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['getting-started']);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const helpCategories = {
    'getting-started': {
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        { title: 'How to create your first account', href: '/help/create-account' },
        { title: 'Complete profile setup guide', href: '/help/profile-setup' },
        { title: 'Understanding the marketplace', href: '/help/marketplace-guide' },
        { title: 'First steps for new users', href: '/help/first-steps' }
      ]
    },
    'marketplace': {
      title: 'Marketplace',
      icon: BookOpen,
      articles: [
        { title: 'How to list products and services', href: '/help/list-products' },
        { title: 'Managing your listings', href: '/help/manage-listings' },
        { title: 'Understanding pricing and fees', href: '/help/pricing-fees' },
        { title: 'Marketplace policies and guidelines', href: '/help/marketplace-policies' }
      ]
    },
    'talent': {
      title: 'Talent & Hiring',
      icon: BookOpen,
      articles: [
        { title: 'Creating a talent profile', href: '/help/talent-profile' },
        { title: 'Finding and hiring talent', href: '/help/hire-talent' },
        { title: 'Managing projects and contracts', href: '/help/manage-projects' },
        { title: 'Payment and escrow system', href: '/help/payment-system' }
      ]
    },
    'technical': {
      title: 'Technical Support',
      icon: BookOpen,
      articles: [
        { title: 'Common technical issues', href: '/help/technical-issues' },
        { title: 'Browser compatibility', href: '/help/browser-compatibility' },
        { title: 'Mobile app troubleshooting', href: '/help/mobile-troubleshooting' },
        { title: 'API and integration support', href: '/help/api-support' }
      ]
    },
    'billing': {
      title: 'Billing & Payments',
      icon: BookOpen,
      articles: [
        { title: 'Understanding your invoice', href: '/help/invoice-guide' },
        { title: 'Payment methods and security', href: '/help/payment-methods' },
        { title: 'Refund and cancellation policy', href: '/help/refund-policy' },
        { title: 'Tax information and reporting', href: '/help/tax-information' }
      ]
    },
    'account': {
      title: 'Account & Security',
      icon: BookOpen,
      articles: [
        { title: 'Account security best practices', href: '/help/account-security' },
        { title: 'Two-factor authentication setup', href: '/help/2fa-setup' },
        { title: 'Password reset and recovery', href: '/help/password-recovery' },
        { title: 'Privacy settings and data control', href: '/help/privacy-settings' }
      ]
    }
  };

  const popularArticles = [
    'How to create your first account',
    'Understanding the marketplace',
    'Creating a talent profile',
    'Finding and hiring talent',
    'Payment and escrow system',
    'Account security best practices'
  ];

  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's platform. Find answers to common questions, tutorials, and contact information." />
        <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/help-center" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How can we <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">help you?</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to common questions, explore tutorials, and get the support you need to succeed with Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-blue-light/30 rounded-xl text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Browse Help Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(helpCategories).map(([key, category]) => (
                <div key={key} className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-zion-cyan" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    <button
                      onClick={() => toggleCategory(key)}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      {expandedCategories.includes(key) ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  
                  {expandedCategories.includes(key) && (
                    <div className="space-y-2">
                      {category.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.href}
                          className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-blue-light/10"
                        >
                          {article.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 px-4 bg-zion-blue-light/10">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Popular Help Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-zion-blue-light/20 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{article}</h3>
                  <Link
                    to={`/help/${article.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
import React, { useState } from 'react';
=======
=======
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  Users,
  Lightbulb,
  Shield,
  Zap,
  Cloud
} from 'lucide-react';

const HelpCenter: React.FC = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: Zap,
      questions: [
        {
          question: "How do I get started with Zion Tech Group services?",
          answer: "Getting started is easy! Simply contact us through our contact form, call us at +1 (302) 464-0950, or email us at info@ziontechgroup.com. Our team will schedule a consultation to understand your needs and recommend the best solutions."
        },
        {
          question: "What information do I need to provide for a consultation?",
          answer: "For an initial consultation, it's helpful to have information about your current technology infrastructure, business goals, challenges you're facing, and any specific requirements or constraints. We'll guide you through the process."
        }
      ]
    },
    {
      title: "Services & Pricing",
      icon: Cloud,
      questions: [
        {
          question: "What services does Zion Tech Group offer?",
          answer: "We offer a comprehensive range of technology services including AI solutions, cloud migration, cybersecurity, digital transformation, web development, data analytics, and more. Each service is tailored to meet your specific business needs."
        },
        {
          question: "How is pricing structured for your services?",
          answer: "Our pricing varies based on the scope and complexity of the project. We offer hourly rates, project-based pricing, and ongoing support packages. We'll provide a detailed quote after understanding your requirements."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: Shield,
      questions: [
        {
          question: "What kind of technical support do you provide?",
          answer: "We provide comprehensive technical support including 24/7 monitoring, emergency response, regular maintenance, and ongoing optimization. Our support team is available through multiple channels including phone, email, and our support portal."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "We prioritize support requests based on severity. Critical issues receive immediate attention, while standard requests are typically addressed within 4-8 hours during business hours."
        }
=======
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics and set up your account",
      articles: [
        "Creating Your First Project",
        "Setting Up Your Environment",
        "Understanding the Dashboard",
        "First Steps with AI Models"
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Master AI tools and machine learning features",
      articles: [
        "Training Custom Models",
        "Data Preparation Guidelines",
        "Model Optimization Tips",
        "API Integration Guide"
      ]
    },
    {
      title: "Security & Compliance",
      description: "Keep your data safe and compliant",
      articles: [
        "Security Best Practices",
        "Data Privacy Guidelines",
        "Compliance Standards",
        "Access Control Setup"
      ]
    },
    {
      title: "Billing & Account",
      description: "Manage your subscription and billing",
      articles: [
        "Understanding Pricing",
        "Upgrading Your Plan",
        "Payment Methods",
        "Invoice Management"
      ]
    }
  ];

  const supportChannels = [
    {
      title: "Phone Support",
      icon: Phone,
      description: "Speak directly with our technical experts",
      contact: "+1 (302) 464-0950",
      availability: "Mon-Fri: 9AM-6PM EST",
      response: "Immediate for urgent issues"
    },
    {
      title: "Email Support",
      icon: Mail,
      description: "Send detailed inquiries and get comprehensive responses",
      contact: "support@ziontechgroup.com",
      availability: "24/7",
      response: "Within 4-8 hours"
    },
    {
      title: "Live Chat",
      icon: MessageCircle,
      description: "Get instant help from our support team",
      contact: "Available on website",
      availability: "Mon-Fri: 9AM-6PM EST",
      response: "Immediate"
    }
  ];

  const resources = [
    {
      title: "Documentation",
      icon: FileText,
      description: "Comprehensive guides and technical documentation",
      link: "/docs",
      category: "Technical"
    },
    {
      title: "Video Tutorials",
      icon: Video,
      description: "Step-by-step video guides for common tasks",
      link: "/tutorials",
      category: "Learning"
    },
    {
      title: "Knowledge Base",
      icon: BookOpen,
      description: "Searchable database of articles and solutions",
      link: "/knowledge-base",
      category: "Self-Service"
    },
    {
      title: "Community Forum",
      icon: Users,
      description: "Connect with other users and share experiences",
      link: "/community",
      category: "Community"
    }
  ];

=======
  const popularArticles = [
    {
      title: "How to Train Your First AI Model",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      views: "2.3k"
    },
    {
      title: "Setting Up Two-Factor Authentication",
      category: "Security & Compliance",
      readTime: "3 min read",
      views: "1.8k"
    },
    {
      title: "API Rate Limits and Best Practices",
      category: "AI & Machine Learning",
      readTime: "7 min read",
      views: "1.5k"
    },
    {
      title: "Understanding Your Monthly Bill",
      category: "Billing & Account",
      readTime: "4 min read",
      views: "1.2k"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
import React from 'react';
import { AppHeader } from '@/layout/AppHeader';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Video, 
  FileText, 
  MessageCircle, 
  Users, 
  Settings, 
  Shield, 
  CreditCard,
  Search,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const helpCategories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Getting Started",
      description: "Learn the basics of using Zion Tech Group",
      articles: [
        "Creating your first account",
        "Setting up your profile",
        "Navigating the platform",
        "First steps for talent",
        "First steps for clients"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Talent & Profiles",
      description: "Everything about talent profiles and portfolios",
      articles: [
        "Creating a compelling profile",
        "Adding skills and certifications",
        "Building your portfolio",
        "Setting competitive rates",
        "Getting discovered by clients"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Services & Projects",
      description: "Managing services and project workflows",
      articles: [
        "Creating service listings",
        "Managing project milestones",
        "Client communication tips",
        "Payment and invoicing",
        "Project completion"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Privacy",
      description: "Keeping your account and data safe",
      articles: [
        "Account security best practices",
        "Two-factor authentication",
        "Data privacy settings",
        "Safe payment practices",
        "Reporting issues"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Billing & Payments",
      description: "Understanding fees and payment processes",
      articles: [
        "Payment methods accepted",
        "Understanding platform fees",
        "Escrow protection",
        "Refund policies",
        "Tax considerations"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Communication",
      description: "Staying connected with clients and talent",
      articles: [
        "Using the messaging system",
        "Video call features",
        "File sharing guidelines",
        "Communication best practices",
        "Resolving disputes"
      ],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const quickActions = [
    {
      title: "Contact Support",
      description: "Get help from our team",
      icon: <MessageCircle className="w-6 h-6" />,
      href: "/contact",
      color: "bg-zion-cyan text-zion-blue-dark"
    },
    {
      title: "Live Chat",
      description: "Instant help available",
      icon: <MessageCircle className="w-6 h-6" />,
      href: "#",
      color: "bg-zion-purple text-white"
    },
    {
      title: "Video Tutorials",
      description: "Learn with visual guides",
      icon: <Video className="w-6 h-6" />,
      href: "#",
      color: "bg-green-500 text-white"
    },
    {
      title: "Documentation",
      description: "Detailed technical guides",
      icon: <FileText className="w-6 h-6" />,
      href: "#",
      color: "bg-blue-500 text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Help Center - Zion Tech Group" 
        description="Get help and support for using Zion Tech Group's AI and tech marketplace platform."
        keywords="help, support, documentation, Zion Tech Group, AI marketplace, tech services"
        canonical="https://ziontechgroup.com/help-center"
      />
      
      <AppHeader />
      
      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help Center
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Find answers, tutorials, and support resources to help you make the most of Zion Tech Group
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';

const $page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under development. Contact us for more information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
          >
            Contact Us for More Information
          </Link>
        </div>
          {/* Support Channels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Get Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel) => {
                const IconComponent = channel.icon;
                return (
                  <div key={channel.title} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                    <p className="text-gray-300 mb-4">{channel.description}</p>
                    <div className="space-y-2 text-sm">
                      <p className="text-blue-400 font-semibold">{channel.contact}</p>
                      <p className="text-gray-400">{channel.availability}</p>
                      <p className="text-gray-400">Response: {channel.response}</p>
                    </div>
                  </div>
                );
              })}
=======
import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, MessageCircle, BookOpen, Users, Settings, Shield, CreditCard, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpCenter() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Zion marketplace",
      icon: BookOpen,
      color: "text-zion-cyan"
    },
    {
      title: "Account & Billing",
      description: "Manage your account and payment methods",
      icon: CreditCard,
      color: "text-zion-purple"
    },
    {
      title: "Marketplace",
      description: "Buy, sell, and discover products",
      icon: Search,
      color: "text-zion-green"
    },
    {
      title: "Community",
      description: "Connect with other users and get help",
      icon: Users,
      color: "text-zion-orange"
    },
    {
      title: "Security & Privacy",
      description: "Learn about our security measures",
      icon: Shield,
      color: "text-zion-red"
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues",
      icon: Settings,
      color: "text-zion-blue"
    }
  ];

  const faqs = [
    {
      question: "How do I create an account on Zion?",
      answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner, choose whether you're a client or talent, fill in your details, and verify your email address."
    },
    {
      question: "What services does Zion offer?",
      answer: "Zion offers a comprehensive marketplace for AI and tech services, including talent hiring, equipment sales, service listings, and community forums. We specialize in connecting AI professionals with businesses."
    },
    {
      question: "How do I post a job or service request?",
      answer: "To post a job or service request, go to the 'Services' section, click 'Post a Request', fill in the details including requirements, budget, and timeline, then submit for review."
    },
    {
      question: "Is Zion free to use?",
      answer: "Yes! Zion is completely free to use for basic marketplace features. We offer premium features for advanced users and businesses, but the core platform is free."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call through the Contact page."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. For enterprise clients, we also offer invoicing and payment terms."
    },
    {
      question: "How do I verify my identity?",
      answer: "Identity verification helps build trust. Go to your profile settings, upload a government-issued ID, and complete the verification process. This typically takes 24-48 hours."
    },
    {
      question: "Can I use Zion internationally?",
      answer: "Yes! Zion is available worldwide. We support multiple currencies and languages, making it easy to connect with talent and clients globally."
    }
  ];

  return (
    <AppLayout>
      <SEO 
        title="Help Center - Zion Tech Group Support" 
        description="Get help and support for using the Zion AI and tech marketplace. Find answers to common questions and contact our support team." 
        keywords="help center, support, FAQ, Zion marketplace, customer service"
        canonical="https://ziontechgroup.com/help"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading>Help Center</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to your questions and get the support you need
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple focus:ring-1 focus:ring-zion-purple"
              />
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">How can we help you?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <category.icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-zion-slate-light text-sm">{category.description}</p>
=======
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or topics..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-zion-blue/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.href}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        {action.icon}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
                      <p className="text-zion-slate-light text-sm">{action.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Help Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex} className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                          {article}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-zion-purple/20 text-zion-purple hover:bg-zion-purple/10">
                      View All Articles
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions, learn best practices, 
              and get the most out of Zion Tech Group's services
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or solutions..."
                className="w-full pl-6 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                Search
              </button>
            </div>
          </div>
          
          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {category.articles.map((article, idx) => (
                      <div key={idx} className="text-sm text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                        • {article}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/docs/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    View All →
=======
=======
                  </Link>
                </div>
              ))}
            </div>
          </div>
=======
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our support team is here to help you 24/7. Get in touch with us through any of these channels.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-zion-slate-light text-sm mb-4">Get instant help from our support team</p>
                <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Start Chat
                </button>
              </div>
              
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-zion-slate-light text-sm mb-4">Send us a detailed message</p>
                <Link
                  to="/contact"
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
                >
                  Send Email
                </Link>
              </div>
              
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-zion-slate-light text-sm mb-4">Call us directly for urgent issues</p>
                <a
                  href="tel:+13024640950"
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
          
          {/* Popular Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{article.title}</h3>
                    <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                      {article.views} views
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{article.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <span className="text-blue-400 text-sm">Read Article →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/support"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Contact Support
                </Link>
                <Link
                  to="/tutorials"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Browse Tutorials
                </Link>
                <Link
                  to="/docs"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
=======
      </section>
    </div>
  );
};

export default $page;
=======
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                    <AccordionTrigger className="px-6 py-4 text-white hover:text-zion-cyan">
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

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still need help?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of Zion. 
              Don't hesitate to reach out with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
=======
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Additional Resources</h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Explore our comprehensive library of resources to help you succeed on Zion Tech Group
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-zion-blue border-zion-purple/20">
                <CardContent className="p-6 text-center">
                  <Video className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Video Tutorials</h3>
                  <p className="text-zion-slate-light mb-4">
                    Step-by-step video guides for all major platform features
                  </p>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    Watch Tutorials
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-zion-blue border-zion-purple/20">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">API Documentation</h3>
                  <p className="text-zion-slate-light mb-4">
                    Technical documentation for developers and integrators
                  </p>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    View Docs
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-zion-blue border-zion-purple/20">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Community Forum</h3>
                  <p className="text-zion-slate-light mb-4">
                    Connect with other users and share best practices
                  </p>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    Join Community
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to help you with any questions or issues you may encounter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90">
                  Contact Support Team
                </Button>
              </Link>
              <Link to="/faq">
                <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  View FAQ
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
=======
=======
