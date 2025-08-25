<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const faqData: FAQItem[] = [
    // AI & Technology
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
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
>>>>>>> origin/cursor/build-and-fix-errors-e276

export default function FAQ() {
  const faqs = [
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
    {
      question: "What AI services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI solutions including AI Autonomous Systems, AI Workflow Automation, AI Business Intelligence, AI Marketing Automation, and specialized AI services for various industries. Our AI solutions are designed to automate complex business processes and provide intelligent insights.",
      category: "AI & Technology",
      tags: ["AI", "automation", "business intelligence", "workflow"]
    },
    {
      question: "How does your AI Autonomous Business Manager work?",
      answer: "Our AI Autonomous Business Manager is an intelligent system that can autonomously manage various business operations including decision-making, process optimization, resource allocation, and performance monitoring. It learns from your business data and continuously improves its decision-making capabilities.",
      category: "AI & Technology",
      tags: ["AI", "business management", "automation", "decision making"]
    },
    {
      question: "What is Quantum Technology and how can it benefit my business?",
      answer: "Quantum Technology represents the next generation of computing power. Our quantum solutions include quantum neural networks, quantum-secure cloud infrastructure, and quantum computing platforms that can solve complex problems exponentially faster than traditional computers, particularly in areas like optimization, cryptography, and machine learning.",
      category: "AI & Technology",
      tags: ["quantum", "computing", "security", "optimization"]
    },
    
    // Services & Solutions
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, government, and more. Each industry solution is tailored to address specific challenges and compliance requirements while leveraging cutting-edge technology.",
      category: "Services & Solutions",
      tags: ["industries", "healthcare", "finance", "manufacturing", "retail"]
    },
    {
      question: "Do you offer cloud migration services?",
      answer: "Yes, we provide comprehensive cloud migration services including assessment, planning, execution, and optimization. Our team ensures minimal downtime and maximum efficiency during the migration process, with support for AWS, Azure, Google Cloud, and hybrid cloud solutions.",
      category: "Services & Solutions",
      tags: ["cloud", "migration", "AWS", "Azure", "hybrid"]
    },
    {
      question: "What cybersecurity services do you provide?",
      answer: "Our cybersecurity services include threat detection, vulnerability assessment, compliance automation (SOC2, ISO 27001), security monitoring, incident response, and security training. We also offer quantum-safe security solutions for future-proof protection.",
      category: "Services & Solutions",
      tags: ["cybersecurity", "compliance", "SOC2", "threat detection", "security"]
    },
    
    // Pricing & Plans
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including subscription-based services, project-based pricing, and enterprise licensing. Our pricing is transparent and scalable, designed to grow with your business needs. Contact us for a customized quote based on your specific requirements.",
      category: "Pricing & Plans",
      tags: ["pricing", "subscription", "enterprise", "custom quote"]
    },
    {
      question: "Do you offer free trials or demos?",
      answer: "Yes, we offer free consultations and demos for most of our services. This allows you to experience our solutions firsthand and understand how they can benefit your business before making a commitment.",
      category: "Pricing & Plans",
      tags: ["free trial", "demo", "consultation", "evaluation"]
    },
    
    // Support & Implementation
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary depending on the complexity of the solution and your business requirements. Simple AI integrations can take 2-4 weeks, while comprehensive enterprise solutions may take 3-6 months. We provide detailed project timelines during the planning phase.",
      category: "Support & Implementation",
      tags: ["implementation", "timeline", "project planning", "deployment"]
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We provide comprehensive post-implementation support including 24/7 technical support, regular maintenance, performance monitoring, updates, and training for your team. Our support team is always available to ensure your systems run smoothly.",
      category: "Support & Implementation",
      tags: ["support", "maintenance", "monitoring", "training", "24/7"]
    },
    {
<<<<<<< HEAD
      question: "Do you provide training for our team?",
      answer: "Yes, we provide comprehensive training programs for your team to ensure they can effectively use and maintain the implemented solutions. Training includes hands-on workshops, documentation, video tutorials, and ongoing support.",
      category: "Support & Implementation",
      tags: ["training", "workshops", "documentation", "team enablement"]
    },
    
    // Technical Requirements
    {
      question: "What are the technical requirements for your solutions?",
      answer: "Technical requirements vary by solution. Most of our AI and cloud solutions work with standard business infrastructure, while some advanced solutions may require specific hardware or network configurations. We conduct a thorough assessment before implementation to ensure compatibility.",
      category: "Technical Requirements",
      tags: ["technical requirements", "infrastructure", "compatibility", "assessment"]
    },
    {
      question: "Do your solutions integrate with existing systems?",
      answer: "Yes, our solutions are designed to integrate seamlessly with existing business systems. We use industry-standard APIs and protocols to ensure compatibility with most enterprise software, databases, and cloud platforms.",
      category: "Technical Requirements",
      tags: ["integration", "APIs", "compatibility", "existing systems"]
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
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
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
  ];

  const categories = ['all', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our AI solutions, services, and technology offerings.
            Can't find what you're looking for? Our team is here to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200"
              >
                <div className="flex items-start">
                  <HelpCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-white">{item.question}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {expandedItems.has(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {expandedItems.has(index) && (
                <div className="px-6 pb-4 border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed mt-4">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No questions found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

<<<<<<< HEAD
        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-gray-700">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert team is ready to help you find the perfect solution for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span>Live Chat Available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                to="/help"
                className="px-8 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-colors duration-200"
              >
                Visit Help Center
              </Link>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-24bd
