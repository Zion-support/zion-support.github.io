import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone, Mail, HelpCircle, Zap, Brain, Shield, Cloud, Rocket, Cpu, Lock, Heart, Users, Code, Truck, Building, ShoppingCart, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]));

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const faqData = [
    {
      category: 'General',
      icon: Zap,
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is a leading technology company specializing in AI-powered solutions, quantum computing, cybersecurity, cloud services, and innovative IT solutions. We help businesses transform their operations through cutting-edge technology."
        },
        {
          question: "Where is Zion Tech Group located?",
          answer: "We are headquartered in Innovation City and serve clients globally. Our team works remotely and on-site to provide the best service regardless of location."
        },
        {
          question: "How can I contact Zion Tech Group?",
          answer: "You can reach us through multiple channels: email at info@ziontechgroup.com, phone at +1 (555) 123-4567, or through our contact form on the website. We typically respond within 24 hours."
        },
        {
          question: "What industries does Zion Tech Group serve?",
          answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, government, energy, and transportation. Our solutions are adaptable to any sector."
        }
      ]
    },
    {
      category: 'Services',
      icon: Brain,
      questions: [
        {
          question: "What AI services do you offer?",
          answer: "Our AI services include machine learning, natural language processing, computer vision, predictive analytics, autonomous systems, and AI ethics platforms. We specialize in both off-the-shelf and custom AI solutions."
        },
        {
          question: "Do you provide quantum computing services?",
          answer: "Yes, we offer quantum computing services including quantum AI, quantum optimization, quantum neural networks, and quantum financial trading platforms. We're at the forefront of quantum technology development."
        },
        {
          question: "What cybersecurity solutions do you offer?",
          answer: "Our cybersecurity portfolio includes AI-powered threat detection, zero-trust network architecture, incident response platforms, IoT security, and comprehensive security frameworks for enterprises."
        },
        {
          question: "Do you provide cloud and DevOps services?",
          answer: "Absolutely! We offer cloud migration, DevOps automation, infrastructure as code, container orchestration, and cloud-native application development. We work with all major cloud providers."
        }
      ]
    },
    {
      category: 'Pricing & Billing',
      icon: ShoppingCart,
      questions: [
        {
          question: "How do you price your services?",
          answer: "Our pricing varies based on the complexity of the project, scope of work, and timeline. We offer flexible pricing models including project-based, retainer, and subscription-based arrangements. Contact us for a custom quote."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we provide free initial consultations to understand your needs and discuss potential solutions. This helps us provide accurate estimates and recommendations for your specific situation."
        },
        {
          question: "What payment terms do you offer?",
          answer: "We offer flexible payment terms including upfront payment, milestone-based payments, and net 30 terms for established clients. We can work with your budget and cash flow requirements."
        },
        {
          question: "Do you provide detailed proposals?",
          answer: "Yes, we provide comprehensive proposals that include project scope, timeline, deliverables, pricing breakdown, and success metrics. This ensures transparency and clear expectations."
        }
      ]
    },
    {
      category: 'Support & Maintenance',
      icon: HelpCircle,
      questions: [
        {
          question: "What support do you provide after project completion?",
          answer: "We offer ongoing support and maintenance packages that include bug fixes, updates, monitoring, and technical support. We also provide training and documentation to ensure your team can effectively use the solutions."
        },
        {
          question: "Do you offer 24/7 support?",
          answer: "Yes, we provide 24/7 emergency support for critical systems and infrastructure. Our support team is available around the clock to address urgent issues and ensure business continuity."
        },
        {
          question: "How do you handle system updates and maintenance?",
          answer: "We follow a structured approach to updates and maintenance, including scheduled maintenance windows, automated testing, rollback procedures, and minimal disruption to your operations."
        },
        {
          question: "Do you provide training for your solutions?",
          answer: "Yes, we provide comprehensive training programs for your team, including user training, administrator training, and ongoing education as new features are released."
        }
      ]
    },
    {
      category: 'Technology & Innovation',
      icon: Rocket,
      questions: [
        {
          question: "How do you stay current with technology trends?",
          answer: "We invest heavily in research and development, maintain partnerships with leading technology companies, participate in industry conferences, and have a dedicated innovation lab that explores emerging technologies."
        },
        {
          question: "What emerging technologies are you working with?",
          answer: "We're actively working with quantum computing, neuromorphic computing, synthetic biology, space technology, autonomous AI systems, and next-generation IoT platforms. We're always exploring the cutting edge."
        },
        {
          question: "Do you develop proprietary technology?",
          answer: "Yes, we develop proprietary solutions and hold several patents. Our R&D team creates innovative technologies that give our clients competitive advantages in their markets."
        },
        {
          question: "How do you ensure technology security and ethics?",
          answer: "We have comprehensive security protocols, ethical AI guidelines, and regular audits. We're committed to responsible technology development and ensuring our solutions are secure, fair, and beneficial."
        }
      ]
    },
    {
      category: 'Partnerships & Collaboration',
      icon: Users,
      questions: [
        {
          question: "Do you work with technology partners?",
          answer: "Yes, we have strategic partnerships with leading technology companies including cloud providers, hardware manufacturers, and software vendors. This allows us to provide comprehensive solutions."
        },
        {
          question: "Can you integrate with existing systems?",
          answer: "Absolutely! We specialize in system integration and can work with your existing infrastructure, legacy systems, and third-party applications. We ensure seamless integration and minimal disruption."
        },
        {
          question: "Do you offer white-label solutions?",
          answer: "Yes, we provide white-label solutions that allow you to offer our technology under your own brand. This is perfect for agencies, consultants, and companies looking to expand their service offerings."
        },
        {
          question: "How do you handle intellectual property?",
          answer: "We're flexible with IP arrangements. We can transfer IP rights, provide licensing, or maintain joint ownership depending on your needs and the nature of the project."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses to complex questions",
      action: "Send Email",
      href: "mailto:support@ziontechgroup.com"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      href: "tel:+15551234567"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help during business hours",
      action: "Start Chat",
      href: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Frequently asked questions about our AI-powered technology solutions and services. Find answers to common questions about Zion Tech Group."
      />
      
      <div className="container-responsive py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full mb-6">
            <HelpCircle className="w-10 h-10 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, technology, and how we can help transform your business
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for questions or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQ.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white">{category.category}</h2>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const itemIndex = categoryIndex * 100 + questionIndex;
                  const isExpanded = expandedItems.has(itemIndex);
                  
                  return (
                    <div key={questionIndex} className="bg-slate-700/30 border border-slate-600/50 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(itemIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-600/30 transition-colors duration-200"
                      >
                        <span className="font-medium text-white pr-4">{item.question}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isExpanded && (
                        <div className="px-6 pb-4">
                          <div className="text-slate-300 leading-relaxed">
                            {item.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-300">
              Our team of experts is here to help. Get in touch with us through any of these channels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full mb-4">
                  <method.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{method.title}</h4>
                <p className="text-slate-400 mb-4">{method.description}</p>
                <a
                  href={method.href}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Explore More Resources
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white font-medium rounded-lg hover:bg-slate-600/50 transition-all duration-200"
            >
              View Services
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
            >
              Get Started
            </a>
            <a
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white font-medium rounded-lg hover:bg-slate-600/50 transition-all duration-200"
            >
              Read Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
