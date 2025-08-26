import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Users, 
  ShoppingCart, 
  Shield, 
  Zap, 
  Globe,
  ChevronDown,
  Search
} from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const faqData = [
    {
      id: 1,
      category: "Getting Started",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
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
      id: 2,
      category: "For Talent & Creators",
      icon: <Users className="w-6 h-6 text-blue-400" />,
      questions: [
        {
          question: "How do I showcase my skills and services?",
          answer: "Create a comprehensive profile highlighting your expertise, experience, and portfolio. You can list specific services, set your rates, and showcase your previous work. Our AI-powered system will help match you with relevant opportunities."
        },
        {
          question: "What types of projects can I find on Zion?",
          answer: "Zion features a wide range of projects including AI development, machine learning, software development, IT consulting, data analysis, cybersecurity, and specialized tech services. Projects range from short-term gigs to long-term contracts."
        },
        {
          question: "How do payments and contracts work?",
          answer: "We provide secure payment processing, milestone-based payment systems, and contract templates. You can set your own rates, negotiate terms with clients, and use our built-in tools for project management and payment tracking."
        }
      ]
    },
    {
      id: 3,
      category: "For Clients & Businesses",
      icon: <ShoppingCart className="w-6 h-6 text-green-400" />,
      questions: [
        {
          question: "How do I find the right talent for my project?",
          answer: "Browse our talent directory, use our AI-powered matching system, post detailed job listings, or request quotes for specific projects. Our platform includes detailed profiles, skill assessments, and verified reviews to help you make informed decisions."
        },
        {
          question: "What types of services are available?",
          answer: "We offer comprehensive AI and tech services including machine learning development, software engineering, data science, cybersecurity, cloud infrastructure, IT consulting, and specialized onsite services. You can also find equipment and hardware solutions."
        },
        {
          question: "How do you ensure quality and reliability?",
          answer: "We implement a comprehensive verification system including profile verification, skill assessments, client reviews, and dispute resolution processes. Our community-driven approach helps maintain high standards across the platform."
        }
      ]
    },
    {
      id: 4,
      category: "Security & Trust",
      icon: <Shield className="w-6 h-6 text-red-400" />,
      questions: [
        {
          question: "How do you protect user data and privacy?",
          answer: "We implement enterprise-grade security measures including end-to-end encryption, secure payment processing, and strict data protection policies. Your personal information and project details are protected by industry-standard security protocols."
        },
        {
          question: "What happens if there's a dispute with a project?",
          answer: "We provide built-in dispute resolution processes and customer support to help resolve any issues. Our platform includes milestone-based payments, project tracking tools, and mediation services to ensure fair outcomes for all parties."
        },
        {
          question: "Are payments secure on your platform?",
          answer: "Yes, all payments are processed through secure, PCI-compliant payment processors. We support various payment methods and implement fraud protection measures to ensure secure transactions for all users."
        }
      ]
    },
    {
      id: 5,
      category: "Platform Features",
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      questions: [
        {
          question: "What makes Zion different from other platforms?",
          answer: "Zion is specifically designed for AI and high-tech industries, offering specialized tools, AI-powered matching, comprehensive equipment listings, and a focus on sustainable technology. Our free model makes advanced tech accessible to businesses of all sizes."
        },
        {
          question: "Do you offer AI-powered matching?",
          answer: "Yes! Our advanced AI algorithms analyze project requirements, skills, experience, and preferences to provide intelligent matches between clients and talent. This helps ensure better project outcomes and more efficient connections."
        },
        {
          question: "Can I access the platform from mobile devices?",
          answer: "Absolutely! Zion is fully responsive and works seamlessly across all devices including smartphones, tablets, and desktop computers. You can browse listings, manage projects, and communicate with clients from anywhere."
        }
      ]
    }
  ];

  // Filter FAQ data based on search query
  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about Zion Tech Group's marketplace platform, 
            services, and how to get started.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for questions or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan/40 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredData.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="p-6 border-b border-zion-cyan/20">
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                </div>
              </div>

              {/* Questions */}
              <div className="divide-y divide-zion-cyan/10">
                {category.questions.map((item, questionIndex) => {
                  const itemId = `${category.id}-${questionIndex}`;
                  const isExpanded = expandedItems.has(itemId);
                  
                  return (
                    <div key={questionIndex} className="p-6">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between text-left hover:text-zion-cyan transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {item.question}
                        </h3>
                        <ChevronDown 
                          className={`w-5 h-5 text-zion-cyan transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <p className="text-zion-slate-light leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help 
              with any specific questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@ziontechgroup.com" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
              >
                Contact Support
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-zinc-800/50 text-white rounded-lg font-medium hover:bg-zinc-700/50 transition-colors"
              >
                General Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
