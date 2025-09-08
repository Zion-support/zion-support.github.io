<<<<<<< HEAD
import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FAQ() {
  const faqs = [
    {
      question: "What is Zion Tech Group?",
      answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented AI specialists, innovative companies, and cutting-edge technological solutions in one seamless ecosystem."
    },
    {
      question: "How does the marketplace work?",
      answer: "Our marketplace allows businesses to find AI talent, services, and equipment, while professionals can showcase their skills and find new opportunities. All transactions are facilitated through our secure platform with built-in project management tools."
    },
    {
      question: "Is Zion really free to use?",
      answer: "Yes! Zion is completely free for users to join, browse, and connect. We believe in democratizing access to AI and technology solutions. Some premium features may have associated costs, but the core marketplace functionality is free."
    },
    {
      question: "What types of services are available?",
      answer: "We offer a wide range of services including AI development, machine learning consulting, software development, IT consulting, data analysis, cloud solutions, and specialized equipment rentals. Our platform covers the full spectrum of tech needs."
    },
    {
      question: "How do I get started as a talent provider?",
      answer: "Simply create an account, complete your profile with your skills and experience, upload your portfolio, and start receiving project requests. Our AI matching system will help connect you with relevant opportunities."
    },
    {
      question: "How do I find the right talent for my project?",
      answer: "You can browse our talent directory, use our AI matching system, or post a job listing. Our platform provides detailed profiles, reviews, and portfolio samples to help you make informed decisions."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We support multiple payment methods including credit cards, bank transfers, and digital wallets. All payments are processed securely through our platform with escrow protection for your peace of mind."
    },
    {
      question: "Is my data secure on Zion?",
      answer: "Absolutely. We use enterprise-grade security measures to protect your data. All communications are encrypted, and we never share your personal information with third parties without your explicit consent."
    },
    {
      question: "Can I work remotely through Zion?",
      answer: "Yes! Zion is designed for remote work. Our platform includes video conferencing, project management tools, and collaboration features that make remote work seamless and productive."
    },
    {
      question: "What if I have a dispute with a client or provider?",
      answer: "We have a comprehensive dispute resolution system in place. Our support team will work with both parties to find a fair solution. In rare cases, we can provide mediation services."
    },
    {
      question: "How do you verify talent and service providers?",
      answer: "We have a multi-step verification process including identity verification, skill assessments, portfolio reviews, and reference checks. We also maintain a rating and review system for ongoing quality assurance."
    },
    {
      question: "Can I use Zion for enterprise-level projects?",
      answer: "Absolutely! Zion is designed to handle projects of all sizes, from small consulting gigs to large enterprise implementations. We offer enterprise-specific features and dedicated support for large-scale projects."
    }
  ];

  const categories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Zion",
      icon: "🚀"
    },
    {
      title: "Account & Billing",
      description: "Manage your account and payments",
      icon: "💳"
    },
    {
      title: "Finding Work",
      description: "Tips for talent and service providers",
      icon: "💼"
    },
    {
      title: "Hiring Talent",
      description: "Guide for clients and employers",
      icon: "👥"
    },
    {
      title: "Project Management",
      description: "Tools and best practices",
      icon: "📋"
    },
    {
      title: "Safety & Security",
      description: "Protecting your information",
      icon: "🔒"
    }
  ];

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about using the Zion Tech Group platform. Get help with marketplace features, account management, and more."
        keywords="FAQ, help, support, Zion Tech Group, marketplace questions"
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to the most common questions about using the Zion Tech Group platform
            </p>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">How can we help you?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-zion-slate-light">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-zion-blue-light">
                  <AccordionTrigger className="text-white hover:text-zion-cyan text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zion-slate-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Still need help?</h2>
              <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help you get the most out of Zion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-medium rounded-lg transition-colors"
                >
                  Email Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple hover:bg-zion-purple/10 font-medium rounded-lg transition-colors"
                >
                  Contact Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
import React from 'react';
=======
import { FaqSection } from "@/components/FaqSection";
=======
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { AppHeader } from "@/layout/AppHeader";
import Footer from "@/components/Footer";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const faqData: FAQItem[] = [
    // AI & Technology
=======
=======
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
=======
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Search,
  MessageSquare,
  Clock,
  Shield,
  Brain,
  Cloud
} from 'lucide-react';

export default function FAQ() {
  const faqs = [
import { SEOHead } from '../components/SEOHead';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp,
  Brain,
  Shield,
  Cpu,
  Cloud,
  Users,
  Zap
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    {
      title: "AI Solutions",
      icon: Brain,
      faqs: [
        {
          question: "What AI services does Zion Tech Group offer?",
          answer: "We offer comprehensive AI solutions including machine learning platforms, natural language processing, computer vision, predictive analytics, autonomous systems, and custom AI development tailored to your business needs."
        },
        {
          question: "How accurate are your AI models?",
          answer: "Our AI models typically achieve 90-98% accuracy depending on the use case. We continuously monitor and improve model performance through retraining and optimization."
        },
        {
          question: "Can you integrate AI with our existing systems?",
          answer: "Yes! We specialize in seamless AI integration with existing enterprise systems, databases, and workflows. Our solutions are designed to work with your current infrastructure."
        }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      faqs: [
        {
          question: "What security measures do you implement?",
          answer: "We implement enterprise-grade security including end-to-end encryption, multi-factor authentication, SOC2 compliance, regular security audits, and 24/7 threat monitoring."
        },
        {
          question: "Do you provide compliance certifications?",
          answer: "Yes, we help clients achieve and maintain various compliance standards including SOC2, ISO 27001, GDPR, HIPAA, and industry-specific requirements."
        },
        {
          question: "How do you handle data breaches?",
          answer: "We have comprehensive incident response plans, immediate notification procedures, and dedicated security teams to handle any security incidents quickly and effectively."
        }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      faqs: [
        {
          question: "Which cloud platforms do you support?",
          answer: "We support all major cloud platforms including AWS, Azure, Google Cloud Platform, and hybrid cloud solutions. We can also deploy on-premises or in edge computing environments."
        },
        {
          question: "What is your uptime guarantee?",
          answer: "We guarantee 99.9% uptime for all cloud services with automatic failover, load balancing, and disaster recovery capabilities."
        },
        {
          question: "How do you optimize cloud costs?",
          answer: "We use advanced monitoring tools, auto-scaling, and cost optimization strategies to reduce cloud expenses by 20-40% while maintaining performance."
        }
      ]
    },
    {
      title: "Implementation & Support",
      icon: Users,
      faqs: [
        {
          question: "How long does implementation typically take?",
          answer: "Implementation timelines vary: simple integrations (2-4 weeks), standard solutions (1-3 months), complex enterprise systems (3-6 months). We provide detailed timelines during consultation."
        },
        {
          question: "What support do you provide after launch?",
          answer: "We provide 24/7 support, regular maintenance, performance monitoring, updates, training, and continuous improvement services to ensure your solution remains effective."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Yes, we offer comprehensive training programs including user training, technical training, and ongoing support to ensure your team can effectively use and maintain the solutions."
        }
      ]
    },
    {
      question: "Do you provide training for your solutions?",
      answer: "Yes, we provide comprehensive training for your team to ensure they can effectively use and maintain the solutions we implement."
    },
    {
      question: "What technologies and platforms do you work with?",
      answer: "We work with a wide range of technologies including React, Node.js, Python, AWS, Azure, Google Cloud, and many others. We choose the best technology stack for each specific project."
    },
    {
      question: "How do you handle project communication and updates?",
      answer: "We maintain regular communication through scheduled meetings, progress reports, and dedicated project management tools. You'll always know the status of your project."
=======
      title: "Pricing & Contracts",
      icon: Zap,
      faqs: [
        {
          question: "What are your pricing models?",
          answer: "We offer flexible pricing including monthly subscriptions, project-based pricing, and enterprise agreements. Pricing depends on scope, complexity, and support requirements."
        },
        {
          question: "Do you offer free trials or demos?",
          answer: "Yes, we offer free consultations, product demos, and pilot programs to help you evaluate our solutions before making a commitment."
        },
        {
          question: "What is included in your contracts?",
          answer: "Our contracts include service delivery, support, maintenance, updates, training, and clear terms for project scope, timelines, and deliverables."
        }
      ]
    }
=======
    { question: "What services does Zion Tech Group offer?", answer: "We offer comprehensive technology solutions including AI & Machine Learning, Micro-SaaS Development, IT Infrastructure, Cybersecurity, Cloud Migration, and Digital Transformation services." },
    { question: "How quickly can you start working on a project?", answer: "We can typically begin work within 1-2 weeks after initial consultation and project scoping. For urgent projects, we can expedite the process." },
    { question: "Do you provide ongoing support after project completion?", answer: "Yes, we offer various support packages including 24/7 monitoring, regular maintenance, and ongoing optimization to ensure your solutions continue to perform optimally." },
    { question: "What industries do you specialize in?", answer: "We work across multiple industries including healthcare, finance, manufacturing, retail, and technology. Our solutions are adaptable to any business sector." },
    { question: "How do you ensure data security and privacy?", answer: "We implement enterprise-grade security measures including encryption, secure authentication, regular security audits, and compliance with industry standards like GDPR and SOC 2." },
    { question: "Can you work with existing systems and infrastructure?", answer: "Absolutely! We specialize in integrating with existing systems and can work with your current infrastructure to enhance and optimize it without disrupting operations." },
    { question: "What is your pricing model?", answer: "We offer flexible pricing models including project-based pricing, monthly retainers, and performance-based pricing. Each project is customized to meet your specific needs and budget." },
    { question: "Do you provide training for your solutions?", answer: "Yes, we provide comprehensive training for your team to ensure they can effectively use and maintain the solutions we implement." }
  ];

  const faqData = [
    {
      id: 1,
      question: "What services does Zion Tech Group offer?",
      answer: "Zion Tech Group offers a comprehensive range of technology services including AI and machine learning solutions, quantum computing platforms, cybersecurity services, infrastructure management, blockchain solutions, and emerging technology consulting. We specialize in enterprise-grade solutions that help businesses transform their operations and stay ahead of technological advancements.",
      category: "services",
      tags: ["Services", "Overview", "Technology"]
    },
    {
      id: 2,
      question: "How does your AI Autonomous Business Manager work?",
      answer: "Our AI Autonomous Business Manager is an advanced platform that uses machine learning algorithms to automate decision-making processes, optimize business operations, and provide strategic insights. It continuously learns from your business data to improve performance and can handle complex tasks like resource allocation, process optimization, and predictive analytics without human intervention.",
      category: "ai",
      tags: ["AI", "Business Automation", "Machine Learning"]
    },
    {
      id: 3,
      question: "What is quantum neural network technology?",
      answer: "Quantum neural networks combine the principles of quantum computing with artificial neural networks to create more powerful and efficient machine learning systems. This technology can process complex data patterns faster than classical computers and solve optimization problems that are currently intractable. Our platform provides tools for developing, training, and deploying quantum neural networks for various applications.",
      category: "ai",
      tags: ["Quantum Computing", "Neural Networks", "Machine Learning"]
    },
    {
      id: 4,
      question: "How do you ensure SOC2 compliance?",
      answer: "We provide comprehensive SOC2 compliance automation tools that help organizations achieve and maintain compliance with security standards. Our platform includes automated risk assessments, continuous monitoring, compliance reporting, and audit trail management. We also offer consulting services to help organizations implement proper security controls and processes.",
      category: "security",
      tags: ["SOC2", "Compliance", "Security", "Automation"]
    },
    {
      id: 5,
      question: "What are your 5G enterprise solutions?",
      answer: "Our 5G enterprise solutions include network optimization platforms, edge computing infrastructure, IoT device management, and real-time analytics capabilities. We help businesses leverage 5G technology to improve connectivity, enable new applications, and create more efficient operational processes. Our solutions are designed for enterprise-scale deployments with security and reliability in mind.",
      category: "infrastructure",
      tags: ["5G", "Enterprise", "Network Optimization", "IoT"]
    },
    {
      id: 6,
      question: "How can I get started with your services?",
      answer: "Getting started is easy! You can contact our sales team through our website, schedule a consultation call, or request a demo of our solutions. We'll assess your needs, recommend the best approach, and help you implement our technology step by step. We also offer training and support to ensure successful adoption.",
      category: "general",
      tags: ["Getting Started", "Consultation", "Support"]
    },
    {
      id: 7,
      question: "Do you provide custom development services?",
      answer: "Yes, we offer custom development services for clients with specific requirements that aren't met by our standard solutions. Our team of experienced developers and engineers can create tailored applications, integrate existing systems, or develop entirely new solutions. We work closely with clients throughout the development process to ensure the final product meets their exact needs.",
      category: "services",
      tags: ["Custom Development", "Tailored Solutions", "Integration"]
    },
    {
      id: 8,
      question: "What kind of support do you offer?",
      answer: "We provide comprehensive support including 24/7 technical support, dedicated account managers, online documentation, training programs, and community forums. Our support team consists of certified professionals who are experts in our technologies. We also offer different support tiers to meet various business needs and response time requirements.",
      category: "general",
      tags: ["Support", "Technical Help", "Training"]
    },
    {
      id: 9,
      question: "How secure are your AI systems?",
      answer: "Security is a top priority for all our AI systems. We implement multiple layers of security including encryption, access controls, audit logging, and regular security assessments. Our AI models are trained on secure, isolated data environments, and we follow industry best practices for AI security. We also provide tools for organizations to implement their own security policies and controls.",
      category: "security",
      tags: ["AI Security", "Encryption", "Access Control", "Compliance"]
    },
    {
      id: 10,
      question: "Can you help with legacy system integration?",
      answer: "Absolutely! We specialize in helping organizations integrate new technologies with existing legacy systems. Our team has extensive experience with various platforms, databases, and enterprise systems. We use modern integration techniques and APIs to ensure smooth connectivity while preserving your existing investments and minimizing disruption to ongoing operations.",
      category: "infrastructure",
      tags: ["Legacy Integration", "System Migration", "APIs"]
    },
    {
      id: 11,
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, telecommunications, and government sectors. Our solutions are designed to be industry-agnostic while providing specific features and compliance requirements for each sector. We have case studies and references across multiple industries to demonstrate our expertise.",
      category: "general",
      tags: ["Industries", "Healthcare", "Finance", "Manufacturing"]
    },
    {
      id: 12,
      question: "How do you handle data privacy and GDPR compliance?",
      answer: "We are fully compliant with GDPR and other international data privacy regulations. Our platform includes built-in privacy controls, data anonymization tools, and consent management systems. We provide comprehensive data governance features and work with clients to ensure their data handling practices meet all regulatory requirements. We also offer privacy impact assessments and compliance consulting services.",
      category: "security",
      tags: ["GDPR", "Data Privacy", "Compliance", "Data Governance"]
    }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularQuestions = faqData.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our services, technology solutions, and how we can help 
            transform your business with cutting-edge AI and emerging technologies.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for questions or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchTerm && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Search Results for "{searchTerm}"
            </h2>
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                  >
                    <div>
                      <span className="text-lg font-semibold text-white">{faq.question}</span>
                      <div className="text-sm text-cyan-400 mt-1">{faq.category}</div>
                    </div>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-6 w-6 text-cyan-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-cyan-400" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Categories */}
      {!searchTerm && (
        <>
          {faqCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className={`py-16 px-4 sm:px-6 lg:px-8 ${categoryIndex % 2 === 0 ? 'bg-gray-800/30' : ''}`}>
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <div className="bg-cyan-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <category.icon className="h-10 w-10 text-cyan-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.title}
                  </h2>
                </div>
                
                <div className="max-w-4xl mx-auto space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * category.faqs.length + faqIndex;
                    return (
                      <div key={faqIndex} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === globalIndex ? null : globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                        >
                          <span className="text-lg font-semibold text-white">{faq.question}</span>
                          {expandedFaq === globalIndex ? (
                            <ChevronUp className="h-6 w-6 text-cyan-400" />
                          ) : (
                            <ChevronDown className="h-6 w-6 text-cyan-400" />
                          )}
                        </button>
                        {expandedFaq === globalIndex && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-300">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </>
      )}

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find the answer you're looking for? Our expert team is here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-2">Contact Support</h3>
              <p className="text-gray-300 mb-4">Get help from our technical experts</p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Contact Support
              </button>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-2">Schedule Consultation</h3>
              <p className="text-gray-300 mb-4">Book a call with our solutions team</p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how our AI-powered solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Our Services
            </button>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} className="bg-white/10 backdrop-blur-md border-white/20 rounded-lg">
                <AccordionItem className="">
                  <AccordionTrigger className="text-left px-6 py-4 text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Still Have Questions?</h2>
            <p className="text-xl text-gray-300 mb-8">Can't find the answer you're looking for? Our team is here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">Contact Us</a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">Call Now</a>
            </div>
          </div>
=======
        </div>
      </section>
    </div>
  );
import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      id: 1,
      question: "What services does Zion Tech Group offer?",
      answer: "Zion Tech Group offers a comprehensive range of technology services including AI & Machine Learning, Cloud & DevOps, Cybersecurity, Digital Transformation, Micro SAAS Services, and Enterprise Solutions. We also provide talent matching and equipment solutions."
    },
    {
      id: 2,
      question: "How do I get started with Zion Tech Group?",
      answer: "Getting started is easy! You can contact us through our contact form, request a free quote, or schedule a consultation. Our team will assess your needs and recommend the best solutions for your business."
    },
    {
      id: 3,
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and technology. Our solutions are adaptable to any industry that can benefit from digital transformation and AI integration."
    },
    {
      id: 4,
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we provide 24/7 support and maintenance for all our solutions. We offer different support tiers to meet your specific needs, from basic maintenance to comprehensive managed services."
    },
    {
      id: 5,
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on the scope and complexity of your project. We offer flexible pricing models including project-based, subscription-based, and custom enterprise solutions. Contact us for a personalized quote."
    },
    {
      id: 6,
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. Simple implementations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      id: 7,
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. Our Micro SAAS Services are specifically designed for small to medium businesses looking to scale efficiently."
    },
    {
      id: 8,
      question: "What makes Zion Tech Group different from other providers?",
      answer: "We combine cutting-edge AI technology with deep industry expertise, offer personalized solutions rather than one-size-fits-all approaches, provide comprehensive end-to-end services, and maintain a strong focus on innovation and customer success."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="FAQ - Zion Tech Group" 
        description="Frequently asked questions about Zion's AI marketplace, IT services, and equipment solutions."
        keywords="FAQ, frequently asked questions, Zion, AI marketplace, IT services, support"
        canonical="https://ziontechgroup.com/faq"
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help transform your business.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:bg-white/20 transition-colors"
                >
                  <span className="font-semibold text-lg">{item.question}</span>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-400" />
                  )}
                </button>
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 border border-blue-400/30 rounded-2xl p-12 backdrop-blur-md text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Contact Support</h3>
                <p className="text-gray-300 mb-4">
                  Get in touch with our technical support team for immediate assistance.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Contact Us
                </a>
              </div>
              
              <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Help Center</h3>
                <p className="text-gray-300 mb-4">
                  Browse our comprehensive help articles and tutorials.
                </p>
                <a 
                  href="/help" 
                  className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Visit Help Center
                </a>
              </div>
              
              <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
                <p className="text-gray-300 mb-4">
                  Chat with our support team in real-time for quick answers.
                </p>
                <button className="inline-block bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-md transition-colors">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQ;
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
=======
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
=======
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FAQ() {
  const faqs = [
    {
}

const faqData: FAQItem[] = [
  {
    question: "What is Zion Tech Group?",
    answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented AI specialists, innovative companies, and cutting-edge technological solutions in one seamless ecosystem.",
    category: "General"
  },
  {
    question: "How does the marketplace work?",
    answer: "Our marketplace allows businesses to find AI talent, services, and equipment, while professionals can showcase their skills and find opportunities. Users can browse categories, post requirements, and connect directly with providers.",
    category: "Marketplace"
  },
  {
    question: "Is it really free to use?",
    answer: "Yes! Zion is completely free to use for both talent and clients. We believe in democratizing access to AI and technology solutions by removing financial barriers.",
    category: "Pricing"
  },
  {
    question: "What types of services are available?",
    answer: "We offer a wide range of services including AI development, machine learning consulting, software development, IT support, data analysis, and specialized equipment rentals. Our categories cover everything from basic IT support to advanced AI solutions.",
    category: "Services"
  },
  {
    question: "How do I find the right talent for my project?",
    answer: "You can browse our talent directory, use our AI matcher tool, or post a job listing. Our platform includes detailed profiles, reviews, and portfolio showcases to help you make informed decisions.",
    category: "Talent"
  },
  {
    question: "What qualifications do your talent have?",
    answer: "All talent on our platform undergoes verification processes. We showcase verified professionals with proven track records, portfolios, and client testimonials to ensure quality.",
    category: "Talent"
  },
  {
    question: "How do payments work?",
    answer: "We offer secure payment processing through our platform. Clients can pay for services using various methods, and we ensure secure transactions with escrow protection for larger projects.",
    category: "Payments"
  },
  {
    question: "What if I'm not satisfied with a service?",
    answer: "We have a comprehensive dispute resolution system. If you're not satisfied, you can contact our support team, and we'll work to resolve the issue fairly for all parties involved.",
    category: "Support"
  },
  {
    question: "Do you offer enterprise solutions?",
    answer: "Yes! We provide enterprise-grade solutions for larger organizations, including dedicated support, custom integrations, and specialized service packages tailored to enterprise needs.",
    category: "Enterprise"
  },
  {
    question: "How do I get started as a talent provider?",
    answer: "Simply sign up for an account, complete your profile with your skills and experience, upload your portfolio, and start receiving project requests. Our onboarding process is designed to be quick and easy.",
    category: "Talent"
  },
  {
    question: "What security measures do you have?",
    answer: "We implement enterprise-grade security including SSL encryption, secure authentication, and regular security audits. Your data and transactions are protected with industry-standard security protocols.",
    category: "Security"
  },
  {
    question: "Can I hire for long-term projects?",
    answer: "Absolutely! We support both short-term and long-term engagements. Many of our clients hire talent for ongoing projects, and we provide tools to manage long-term relationships effectively.",
    category: "Projects"
  },
  {
    question: "Do you offer mobile access?",
    answer: "Yes! We have a mobile app available for both iOS and Android, allowing you to manage projects, communicate with talent, and access the marketplace on the go.",
    category: "Mobile"
  },
  {
    question: "What makes Zion different from other platforms?",
    answer: "Zion is unique because we're completely free, focus specifically on AI and high-tech, offer comprehensive verification, and provide an integrated ecosystem for talent, services, and equipment all in one place.",
    category: "General"
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team through our contact page, email support, or live chat. We typically respond within 24 hours and offer priority support for enterprise clients.",
    category: "Support"
  }
];

const categories = ["General", "Marketplace", "Services", "Talent", "Pricing", "Payments", "Projects", "Enterprise", "Security", "Support", "Mobile"];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);
=======
      category: "General",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with skilled AI professionals, tech services, and cutting-edge equipment."
        },
        {
          question: "Is Zion really free to use?",
          answer: "Yes! Zion is completely free to use. We don't charge any subscription fees or hidden costs. Our platform is designed to democratize access to AI and tech talent."
        },
        {
          question: "How do I get started on Zion?",
          answer: "Getting started is easy! Simply create an account, choose whether you're looking for services or offering them, and start exploring our marketplace. You can browse talent, post jobs, or list your services immediately."
=======
import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MessageCircle, Users, Shield, CreditCard, Zap } from "lucide-react";

export default function FAQ() {
  const faqData = [
    {
      category: "General",
      icon: Search,
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with top AI and tech talent, services, and equipment in one comprehensive platform."
        },
        {
          question: "How does Zion work?",
          answer: "Zion operates as a two-sided marketplace where businesses can find and hire AI/tech professionals, purchase services, and acquire equipment. Talented individuals can showcase their skills, offer services, and find opportunities."
        },
        {
          question: "Is Zion really free to use?",
          answer: "Yes! Zion is completely free for both businesses and talent. We believe in democratizing access to AI and tech resources, so there are no subscription fees or hidden costs."
        }
      ]
    },
    {
      category: "For Businesses",
      icon: Users,
      questions: [
        {
          question: "How do I find the right talent for my project?",
          answer: "You can browse our talent directory, use our AI-powered matching system, or post a job listing. Our platform includes detailed profiles, portfolios, and reviews to help you make informed decisions."
        },
        {
          question: "What types of services can I find on Zion?",
          answer: "Zion offers a wide range of services including AI development, software engineering, data science, IT consulting, equipment sales, and specialized tech solutions across various industries."
        },
        {
          question: "How do I ensure quality when hiring through Zion?",
          answer: "All talent on Zion undergoes verification processes. You can review portfolios, check ratings and reviews, conduct interviews, and use our milestone-based payment system for added security."
        }
      ]
    },
    {
      category: "For Talent",
      icon: Zap,
      questions: [
        {
          question: "How do I create a profile on Zion?",
          answer: "Sign up for free and complete your profile with your skills, experience, portfolio, and rates. You can also add certifications, previous work samples, and professional references."
        },
        {
          question: "What are the payment terms?",
          answer: "Zion uses milestone-based payments to ensure both parties are protected. Payments are released upon project completion or milestone approval, with secure escrow services available."
        },
        {
          question: "Can I work with international clients?",
          answer: "Yes! Zion is a global platform. You can work with clients from anywhere in the world, and our platform handles currency conversion and international payment processing."
        }
      ]
    },
    {
      category: "Security & Trust",
      icon: Shield,
      questions: [
        {
          question: "How does Zion protect my data?",
          answer: "We use enterprise-grade security measures including end-to-end encryption, secure payment processing, and strict data protection policies. Your information is never shared without consent."
        },
        {
          question: "What happens if there's a dispute?",
          answer: "Zion has a comprehensive dispute resolution system. Our support team mediates conflicts, and we offer arbitration services for complex cases to ensure fair outcomes for all parties."
        },
        {
          question: "Is my payment information secure?",
          answer: "Absolutely. We use industry-standard SSL encryption and PCI DSS compliance for all payment processing. We never store your full payment details on our servers."
        }
      ]
    },
    {
      category: "Billing & Payments",
      icon: CreditCard,
      questions: [
        {
          question: "What payment methods does Zion accept?",
          answer: "We accept major credit cards, bank transfers, and digital wallets. For enterprise clients, we also offer invoicing and payment terms."
        },
        {
          question: "Are there any transaction fees?",
          answer: "Zion charges a small percentage fee on completed transactions to maintain our platform. This fee is transparent and clearly displayed before any transaction."
        },
        {
          question: "How quickly do I receive payments?",
          answer: "Payments are typically processed within 1-3 business days after project completion or milestone approval, depending on your chosen payment method."
        }
      ]
    },
    {
      category: "Support",
      icon: MessageCircle,
      questions: [
        {
          question: "How can I get help if I need support?",
          answer: "Our support team is available 24/7 through live chat, email at support@ziontechgroup.com, and phone support. We also have an extensive help center with tutorials and guides."
        },
        {
          question: "Does Zion offer training or onboarding?",
          answer: "Yes! We provide comprehensive onboarding for new users, including video tutorials, best practices guides, and one-on-one sessions with our success team."
        },
        {
          question: "Can I schedule a demo of Zion's features?",
          answer: "Absolutely! We offer personalized demos for businesses and talent. Contact our sales team to schedule a walkthrough of our platform's capabilities."
        }
      ]
    }
  ];

      question: "How does the AI matching work?",
      answer: "Our AI matching algorithm analyzes your requirements and preferences to match you with the most compatible talent or services. The process takes into account skills, experience, availability, and past performance to ensure optimal results."
    },
    {
      question: "How do I hire someone on Zion?",
      answer: "To hire talent on Zion, post a job or project, review matches or applications, interview candidates through our platform, and extend an offer. Our secure payment system protects both parties throughout the engagement."
    },
    {
      question: "What are the payment terms?",
      answer: "Zion offers flexible payment options including milestone-based payments, hourly rates, or fixed project fees. Funds are held in escrow until deliverables are approved, ensuring security for both clients and talent."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call with our team through our contact page."
    },
    {
      question: "Is Zion really free to use?",
      answer: "Yes! Zion is completely free for both talent and clients. We believe in democratizing access to AI and technology solutions, so there are no platform fees or hidden costs."
    },
    {
      question: "How do I create a talent profile?",
      answer: "Sign up for an account, choose 'Talent' during registration, and complete your profile with your skills, experience, portfolio, and availability. Our AI will help optimize your profile for better matches."
    },
    {
      question: "What types of services can I find on Zion?",
      answer: "Zion offers a wide range of AI and technology services including software development, AI consulting, data science, cloud infrastructure, cybersecurity, and specialized equipment. We cover the full spectrum of tech needs."
    },
    {
      question: "How does the dispute resolution work?",
      answer: "If there's a disagreement between parties, our dedicated support team will mediate the situation. We review all communications and deliverables to ensure fair resolution for both parties."
    },
    {
      question: "Can I work with international clients/talent?",
      answer: "Absolutely! Zion is a global platform. You can work with clients and talent from anywhere in the world, expanding your opportunities and access to diverse skill sets."
    },
    {
      question: "How do I get paid as a talent?",
      answer: "Once your work is approved by the client, funds are released from escrow to your Zion wallet. You can then withdraw to your bank account or use the funds for other services on the platform."
    }
  ];

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group's AI and technology marketplace. Learn how our platform works, pricing, and how to get started."
        keywords="FAQ, frequently asked questions, Zion Tech Group, AI marketplace, tech services, support"
        canonical="https://ziontechgroup.com/faq"
      />
      <Header />
=======
        description="Find answers to common questions about Zion's AI and technology marketplace platform."
        keywords="FAQ, frequently asked questions, Zion marketplace, AI platform, tech services"
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to the most common questions about Zion Tech Group and our marketplace
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === "All"
                    ? "bg-zion-purple text-white"
                    : "bg-zion-blue-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-zion-cyan"
=======
        description="Find answers to common questions about Zion Tech Group, the world's first free AI and tech marketplace. Learn how to use our platform, find talent, and get started."
        keywords="FAQ, help, support, Zion Tech Group, AI marketplace, tech services, questions, answers"
        canonical="https://ziontechgroup.com/faq"
      />
      
      <div className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Find answers to the most common questions about Zion Tech Group and our AI marketplace platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for questions or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-zion-purple text-white'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                }`}
              >
                All Categories
              </button>
      question: "What is Zion Tech Group?",
      answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented professionals with businesses and individuals seeking AI and tech services, equipment, and expertise."
    },
    {
      question: "How do I get started on Zion?",
      answer: "Getting started is easy! Simply create an account, choose whether you're a talent (service provider) or client (service seeker), complete your profile, and start exploring opportunities or posting projects."
    },
    {
      question: "What services can I find on Zion?",
      answer: "Zion offers a wide range of services including AI development, software engineering, data science, IT consulting, equipment rental, and specialized tech services. Our platform covers everything from basic IT support to cutting-edge AI solutions."
    },
    {
      question: "How does the talent matching work?",
      answer: "Our AI-powered matching system analyzes your project requirements and matches you with the most suitable talent based on skills, experience, availability, and past performance. You can also browse talent profiles directly."
    },
    {
      question: "Is Zion really free to use?",
      answer: "Yes! Zion is completely free for both talent and clients. We believe in democratizing access to tech talent and services. There are no hidden fees or subscription costs."
    },
    {
      question: "How do I ensure quality of work?",
      answer: "Zion features a comprehensive review and rating system, portfolio showcases, and verified profiles. You can review past work, check references, and communicate directly with talent before hiring."
    },
    {
      question: "What payment methods are accepted?",
      answer: "Zion supports multiple payment methods including credit cards, bank transfers, and digital wallets. All payments are processed securely through our platform with escrow protection for your peace of mind."
    },
    {
      question: "Can I hire talent for long-term projects?",
      answer: "Absolutely! Zion supports both short-term and long-term engagements. You can hire talent for one-time projects, ongoing work, or full-time positions depending on your needs."
    },
    {
      question: "How do I protect my intellectual property?",
      answer: "Zion includes built-in IP protection through our terms of service and contract templates. All agreements clearly define ownership rights, confidentiality requirements, and data protection measures."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "Zion has a dispute resolution system in place. If you're not satisfied with the work, our team will help mediate the situation and ensure fair resolution for all parties involved."
    },
    {
      question: "Do you offer enterprise solutions?",
      answer: "Yes! Zion provides enterprise-grade solutions for larger organizations, including dedicated account management, custom integrations, bulk hiring capabilities, and specialized support services."
    },
    {
      question: "How can I stay updated with Zion news?",
      answer: "Subscribe to our newsletter, follow us on social media, or check our blog regularly for updates on new features, success stories, and industry insights."
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO 
        title="FAQ - Zion Tech Group" 
        description="Find answers to frequently asked questions about Zion Tech Group, the world's first free AI and tech marketplace."
        keywords="FAQ, Zion Tech Group, AI marketplace, tech services, help, support"
        canonical="https://ziontechgroup.com/faq"
      />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zion-slate-light">
              Everything you need to know about Zion Tech Group
            </p>
          </div>

          <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-zion-blue-light">
                  <AccordionTrigger className="text-left text-white hover:text-zion-cyan transition-colors">
=======
              Find answers to the most common questions about Zion's AI and technology marketplace
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-zion-blue-light">
                  <AccordionTrigger className="text-left text-white hover:text-zion-cyan">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zion-slate-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
  return (
    <>
      <SEO
        title="Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group, the world's first free AI and tech marketplace."
        keywords="FAQ, help, support, Zion Tech Group, AI marketplace, tech services"
        canonical="https://ziontechgroup.com/faq"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Everything you need to know about Zion Tech Group, the world's premier AI and tech marketplace
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqData.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-zion-blue-dark border-zion-blue-light">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-zion-cyan">
                    <category.icon className="h-6 w-6" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, itemIndex) => (
                      <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
                        <AccordionTrigger className="text-left text-white hover:text-zion-cyan">
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
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
              <p className="text-zion-slate-light mb-6">
                Our support team is here to help you get the most out of Zion Tech Group
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple hover:bg-zion-purple-light text-white font-medium rounded-lg transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Email Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple hover:bg-zion-purple/10 font-medium rounded-lg transition-colors"
                >
          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zion-blue-light/20 transition-colors"
                >
                  <span className="text-white font-medium text-lg">{faq.question}</span>
                  {openItems.has(index) ? (
                    <ChevronUp className="h-5 w-5 text-zion-cyan" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-zion-cyan" />
                  )}
                </button>
                {openItems.has(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-zion-slate-light leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
              <p className="text-zion-slate-light mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
              >
                Contact Support
              </a>
=======
          
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still have questions?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white" asChild>
                <Link to="/help">Help Center</Link>
              </Button>
=======
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-f8cc
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
