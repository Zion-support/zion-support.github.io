import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Star,
  TrendingUp,
  Shield,
  Cloud,
  Brain,
  Zap
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

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
      icon: HelpCircle,
      items: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is a leading technology company specializing in AI, cybersecurity, cloud computing, IoT, and digital transformation solutions. We help businesses leverage cutting-edge technology to achieve their goals."
        },
        {
          question: "Where is Zion Tech Group located?",
          answer: "Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709. We serve clients globally with remote and on-site support capabilities."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, government, and more. Our solutions are adaptable to any sector that can benefit from digital transformation."
        }
      ]
    },
    {
      category: 'Services',
      icon: TrendingUp,
      items: [
        {
          question: "What AI services do you offer?",
          answer: "We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, AI strategy consulting, and custom AI solution development tailored to your business needs."
        },
        {
          question: "Do you provide cybersecurity services?",
          answer: "Yes, we offer comprehensive cybersecurity services including security audits, penetration testing, incident response, security awareness training, compliance consulting, and ongoing security monitoring and support."
        },
        {
          question: "What cloud services do you provide?",
          answer: "Our cloud services include cloud migration, DevOps automation, multi-cloud management, cloud security, cost optimization, and 24/7 cloud infrastructure monitoring and support."
        }
      ]
    },
    {
      category: 'Support & Contact',
      icon: MessageCircle,
      items: [
        {
          question: "How can I contact support?",
          answer: "You can reach our support team by phone at +1 302 464 0950, email at kleber@ziontechgroup.com, or through our contact form on the website. We typically respond within 2-4 hours during business hours."
        },
        {
          question: "What are your support hours?",
          answer: "Our standard support hours are Monday-Friday 9 AM - 6 PM EST. We also offer 24/7 emergency support for critical issues and enterprise clients with premium support packages."
        },
        {
          question: "Do you offer remote support?",
          answer: "Yes, we provide comprehensive remote support for most technical issues. We use secure remote access tools and can resolve many problems without requiring an on-site visit."
        }
      ]
    },
    {
      category: 'Pricing & Contracts',
      icon: Star,
      items: [
        {
          question: "How do you price your services?",
          answer: "Our pricing varies based on the scope of work, complexity, and timeline. We offer flexible engagement models including project-based pricing, retainer agreements, and subscription-based services. Contact us for a custom quote."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we offer a free initial consultation to understand your needs and provide recommendations. This typically includes a 30-60 minute discussion about your current challenges and potential solutions."
        },
        {
          question: "What payment terms do you offer?",
          answer: "We offer flexible payment terms including net 30, milestone-based payments for projects, and monthly billing for ongoing services. We accept major credit cards, bank transfers, and can work with your procurement processes."
        }
      ]
    },
    {
      category: 'Technology & Innovation',
      icon: Brain,
      items: [
        {
          question: "Do you work with emerging technologies?",
          answer: "Absolutely! We specialize in emerging technologies including quantum computing, blockchain, IoT, edge computing, and AI. We stay at the forefront of innovation to provide our clients with cutting-edge solutions."
        },
        {
          question: "How do you ensure data security?",
          answer: "We implement industry-leading security practices including encryption, multi-factor authentication, regular security audits, compliance with standards like SOC 2, GDPR, and HIPAA, and ongoing security training for our team."
        },
        {
          question: "Can you integrate with existing systems?",
          answer: "Yes, we specialize in system integration and can work with your existing infrastructure, legacy systems, and third-party applications. We ensure seamless integration while maintaining data integrity and system performance."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white py-20">
        <div className="container-responsive text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zion-cyan/90 max-w-3xl mx-auto"
          >
            Find answers to common questions about our services, support, and technology solutions
          </motion.p>
        </div>
      </div>

      <div className="container-responsive py-16">
        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQ.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * categoryIndex }}
              className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-zion-cyan" />
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  const isExpanded = expandedItems.has(globalIndex);
                  
                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-white/5 border border-zion-cyan/20 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                      >
                        <span className="text-white font-medium">{item.question}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-zion-cyan" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-zion-cyan" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-zion-cyan/90">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 border border-zion-cyan/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-zion-cyan/90 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help. 
              Contact us directly and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-futuristic transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
