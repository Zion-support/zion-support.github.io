import { SEO } from "@/components/SEO";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Card, CardContent } from "@/components/ui/card";
import React from 'react';
import { SEO } from "@/components/SEO";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, Users, ShoppingCart, Shield, Zap, Globe } from "lucide-react";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone,
  ChevronDown,
  BookOpen,
  Shield,
  Zap,
  Users,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

export default function FAQ() {
  const faqCategories = [
    {
import React from 'react';
import { AppHeader } from '@/layout/AppHeader';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import React from 'react';
import { SEO } from '@/components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";

export default function FAQ() {
  const faqData = [
    {
      title: "Getting Started",
      icon: Zap,
      questions: [
        {
          question: "How do I create an account on Zion?",
          answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner and choose whether you're a client looking for services or talent offering your skills. Fill in your basic information and verify your email to get started."
        },
        {
          question: "What types of accounts can I create?",
          answer: "Zion offers two main account types: Client accounts for businesses and individuals seeking AI and tech services, and Talent accounts for professionals offering their expertise in AI, development, design, and other tech fields."
        },
        {
          question: "Is Zion really free to use?",
          answer: "Yes! Zion is completely free to use. We believe in democratizing access to AI and tech solutions, so there are no subscription fees or hidden costs for using our platform."
        }
      ]
    },
    {
      category: "For Talent & Creators",
      questions: [
        {
          question: "How do I create a talent profile?",
          answer: "After signing up, navigate to your dashboard and click 'Create Profile'. You can add your skills, experience, portfolio, and set your rates. Make sure to include relevant certifications and examples of your work."
        },
        {
          question: "What types of services can I offer?",
          answer: "You can offer any tech-related service including AI development, software engineering, data science, IT consulting, cybersecurity, cloud services, and more. We support both technical and business services."
        },
        {
          question: "How do I get hired?",
          answer: "Optimize your profile with relevant keywords, showcase your best work, maintain a high rating, and respond promptly to client inquiries. You can also actively browse job postings and submit proposals."
        }
      ]
    },
    {
      category: "For Clients & Employers",
      questions: [
        {
          question: "How do I find the right talent?",
          answer: "Use our advanced search and filtering system to find professionals based on skills, experience, location, and ratings. You can also post detailed job requirements and let qualified talent come to you."
        },
        {
          question: "What payment methods are accepted?",
          answer: "We support multiple payment methods including credit cards, bank transfers, and digital wallets. All payments are processed securely through our platform with escrow protection for your peace of mind."
        },
        {
          question: "How do I ensure quality work?",
          answer: "Review talent profiles, check ratings and reviews, request portfolios, and start with smaller projects to test the relationship. Our dispute resolution system also protects both parties."
      title: "For Clients",
      icon: Users,
      questions: [
        {
          question: "How do I find the right talent for my project?",
          answer: "You can search for talent using our AI-powered matching system, browse categories, or post a job listing. Our platform will suggest the best matches based on your requirements, budget, and timeline."
        },
        {
          question: "What services can I find on Zion?",
          answer: "Zion offers a wide range of services including AI development, web and mobile app development, data science, UI/UX design, IT consulting, equipment rentals, and specialized AI solutions for various industries."
        },
        {
          question: "How do I ensure quality when hiring talent?",
          answer: "All talent on Zion are verified professionals with portfolios, reviews, and ratings. You can review their work history, read client testimonials, and communicate directly before making a decision."
        }
      ]
    },
    {
      title: "For Talent",
      icon: Globe,
      questions: [
        {
          question: "How do I showcase my skills and experience?",
          answer: "Create a comprehensive profile highlighting your expertise, upload portfolio pieces, list your skills, and set your rates. You can also add certifications, education, and work samples to stand out."
        },
        {
          question: "How do I get paid for my work?",
          answer: "Zion offers secure payment processing with milestone-based payments. You can set up payment schedules, track project progress, and receive payments directly through our platform."
        },
        {
          question: "Can I work with international clients?",
          answer: "Absolutely! Zion is a global platform connecting talent and clients worldwide. You can work with clients from any country and expand your professional network internationally."
        }
      ]
    },
    {
      category: "Marketplace & Services",
      questions: [
        {
          question: "What can I buy in the marketplace?",
          answer: "Our marketplace includes AI services, software development, IT consulting, equipment rentals, specialized hardware, and more. We're constantly expanding our categories to meet your needs."
        },
        {
          question: "How do I request a quote?",
          answer: "Navigate to the 'Request Quote' page, fill out the form with your project requirements, and we'll connect you with qualified professionals who can provide detailed proposals."
        },
        {
          question: "Are there any guarantees on services?",
          answer: "Yes, we offer satisfaction guarantees and our dispute resolution system ensures fair outcomes. Most professionals also offer revisions and support to ensure your complete satisfaction."
      title: "Platform Features",
      icon: ShoppingCart,
      questions: [
        {
          question: "What is the AI Matcher feature?",
          answer: "Our AI Matcher uses advanced algorithms to connect clients with the perfect talent based on project requirements, skills, availability, and budget. It saves time and ensures better matches."
        },
        {
          question: "How does the marketplace work?",
          answer: "The marketplace allows you to browse and purchase pre-built AI solutions, equipment, and services. You can also request custom quotes for specific projects or needs."
        },
        {
          question: "What community features are available?",
          answer: "Join our community forums to connect with other professionals, share knowledge, ask questions, and stay updated on the latest AI and tech trends."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What if I encounter technical issues?",
          answer: "Our support team is available 24/7. You can reach us through the contact form, email support@ziontechgroup.com, or use our live chat feature for immediate assistance."
        },
        {
          question: "How secure is my data?",
          answer: "We use enterprise-grade security measures including end-to-end encryption, secure payment processing, and strict data protection policies. Your privacy and security are our top priorities."
        },
        {
          question: "Can I use Zion Tech Group on mobile devices?",
          answer: "Absolutely! Our platform is fully responsive and works seamlessly on all devices. We also offer a dedicated mobile app for enhanced mobile experience."
        }
      ]
    },
    {
      category: "Business & Enterprise",
      questions: [
        {
          question: "Do you offer enterprise solutions?",
          answer: "Yes! We provide customized enterprise solutions including dedicated account managers, bulk hiring, custom integrations, and enterprise-grade security features. Contact our sales team for details."
        },
        {
          question: "Can I integrate Zion Tech Group with my existing systems?",
          answer: "We offer comprehensive API access and integration options for enterprise clients. Our technical team can help you integrate our platform with your existing HR, project management, and billing systems."
        },
        {
          question: "What about compliance and legal requirements?",
          answer: "We maintain compliance with major regulations including GDPR, SOC 2, and industry-specific requirements. Our legal team ensures all contracts and terms meet your business needs."
        }
      ]
      question: "What is Zion Tech Group?",
      answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with top AI and tech talent, services, and equipment in one comprehensive platform."
    },
    {
      question: "How does the AI talent matching work?",
      answer: "Our AI-powered matching system analyzes your project requirements, budget, and timeline to connect you with the most suitable tech professionals. The system considers skills, experience, availability, and past performance to ensure optimal matches."
    },
    {
      question: "What types of services do you offer?",
      answer: "We offer a wide range of services including AI development, software engineering, IT consulting, equipment rental, green IT solutions, and specialized tech services. Our marketplace covers everything from individual freelancers to enterprise solutions."
    },
    {
      question: "Is Zion Tech Group free to use?",
      answer: "Yes! Our core marketplace platform is completely free to use. We believe in democratizing access to tech talent and services. Some premium features and enterprise solutions may have associated costs."
    },
    {
      question: "How do I get started as a client?",
      answer: "Simply create an account, post your project requirements, and our AI will match you with suitable talent. You can also browse our talent directory, equipment listings, and service categories to find what you need."
    },
    {
      question: "How do I join as a tech professional?",
      answer: "Create a profile highlighting your skills, experience, and portfolio. Our verification process ensures quality, and once approved, you'll start receiving project matches and can bid on opportunities."
    },
    {
      question: "What makes Zion different from other platforms?",
      answer: "Zion focuses exclusively on high-tech and AI, offering specialized matching algorithms, comprehensive equipment rentals, green IT solutions, and a community-driven approach that fosters innovation and collaboration."
    },
    {
      question: "Do you offer enterprise solutions?",
      answer: "Yes! We provide enterprise-grade solutions including team management, advanced analytics, custom integrations, and dedicated support for large organizations looking to scale their tech operations."
    },
    {
      question: "How do you ensure quality and security?",
      answer: "We implement rigorous verification processes, secure payment systems, dispute resolution mechanisms, and continuous monitoring to maintain high standards and protect all users."
    },
    {
      question: "Can I rent equipment through Zion?",
      answer: "Absolutely! Our equipment marketplace offers a wide range of tech equipment for rent, from development hardware to specialized AI computing resources, making it easier for businesses to access what they need without large capital investments."
      title: "Security & Trust",
      icon: Shield,
      questions: [
        {
          question: "How does Zion protect my data and privacy?",
          answer: "We implement enterprise-grade security measures including encryption, secure payment processing, and strict privacy policies. Your data is never shared with third parties without consent."
        },
        {
          question: "What happens if there's a dispute with a client or talent?",
          answer: "Zion provides dispute resolution services and mediation support. We have clear terms of service and can help resolve conflicts to ensure fair outcomes for all parties."
        },
        {
          question: "Are payments secure on the platform?",
          answer: "Yes, all payments are processed through secure, encrypted channels. We use industry-standard payment processors and never store your payment information on our servers."
        }
      ]
    }
  ];


  return (
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SEO } from '@/components/SEO';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
import { FaqSection } from "@/components/FaqSection";
import { FaqSection } from "@/components/FaqSection";

  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());








    }
    setExpandedItems(newExpanded);
  };




  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HelpCircle className="w-20 h-20 text-zion-cyan mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Frequently Asked <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Find answers to common questions about our services, pricing, and how we can help transform your business.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zion-slate-dark/30 transition-colors duration-300"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openItems.includes(item.id) ? (
                          <Minus className="w-5 h-5 text-zion-cyan" />
                        ) : (
                          <Plus className="w-5 h-5 text-zion-cyan" />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openItems.includes(item.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <p className="text-zion-slate-light leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* No Results */}
          {filteredCategories.length === 0 && searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <HelpCircle className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or browse our categories below
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Have <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Questions</span>?
            </h2>
            <p className="text-xl text-zion-slate-light mb-12">
              Can't find what you're looking for? Our team is here to help you get the answers you need.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Live Chat</h3>
                <p className="text-zion-slate-light mb-4">
                  Chat with our support team in real-time
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                  Start Chat
                </button>
              </div>
              
              <div className="text-center">
                <Mail className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Email Support</h3>
                <p className="text-zion-slate-light mb-4">
                  Send us a detailed message
                </p>
                <Link 
                  to="/contact"
                  className="inline-block px-6 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                >
                  Send Email
                </Link>
              </div>
              
              <div className="text-center">
                <Phone className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Phone Support</h3>
                <p className="text-zion-slate-light mb-4">
                  Call us directly for immediate assistance
                </p>
                <a 
                  href="tel:+15551234567"
                  className="inline-block px-6 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Resources</span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-12">
              Explore our knowledge base, documentation, and community resources
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, title: 'Documentation', description: 'Comprehensive guides and API references', link: '/docs' },
                { icon: Globe, title: 'Knowledge Base', description: 'Articles, tutorials, and best practices', link: '/knowledge' },
                { icon: Users, title: 'Community', description: 'Connect with other users and developers', link: '/community' },
                { icon: Shield, title: 'Support Portal', description: 'Submit tickets and track requests', link: '/support' }
              ].map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <resource.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{resource.description}</p>
                  <Link 
                    to={resource.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors text-sm font-medium"
                  >
                    Learn More
                    <ChevronDown className="ml-1 w-4 h-4 rotate-[-90deg]" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );

            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />


                    <ChevronUp className="w-5 h-5 text-zion-cyan" />
                    <ChevronDown className="w-5 h-5 text-gray-400" />
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <Link
                <MessageCircle className="w-4 h-4 mr-2" />
              </Link>

              <Link
                <MessageCircle className="w-5 h-5 mr-2" />
              </Link>
                <Phone className="w-5 h-5 mr-2" />
                <Mail className="w-5 h-5 mr-2" />

              <BookOpen className="w-6 h-6 text-zion-cyan" />
            <Link
            </Link>

              <Video className="w-6 h-6 text-zion-purple" />
            <Link
            </Link>

              <Users2 className="w-6 h-6 text-zion-cyan" />
            <Link
            </Link>

export default FAQ;
};

export default FAQ;
