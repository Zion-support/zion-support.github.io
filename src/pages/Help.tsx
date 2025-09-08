import React from 'react';
import { SEO } from '@/components/SEO';

export default function Help() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
			<SEO title="Help Center - Zion Tech Group" description="Find answers and support resources." />
			<div className="container-responsive text-white">
				<h1 className="text-4xl font-bold mb-4">Help Center</h1>
				<p className="text-zion-slate-light max-w-2xl">Guides, FAQs, and contact options to help you succeed.</p>
			</div>
		</div>
	);
}

import React from 'react';
import { HelpCircle, BookOpen, Video, Users, MessageCircle, Search, FileText, Lightbulb } from 'lucide-react';

import React { useState } from 'react';""
import { motion } from 'framer-motion';""
import { SEO } from '../components/SEO';

import { 
  Search, MessageCircle, Phone, Mail, Clock, BookOpen, Video, FileText, Users, ChevronDown,

      category: "Getting Started"
    }, { id: 2, question: "What AI services do you offer?",
      answer: "We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, and custom AI solutions tailored to your business needs.", category: "AI Services"
    }, { id: 3, question: "Do you provide quantum computing solutions?",
      answer: "Yes! We offer quantum computing services including quantum algorithm development, quantum machine learning, and access to quantum computing platforms for research and development.", category: "Quantum Computing"
    }, { id: 4, question: "What is your pricing structure?",
      answer: "Our pricing varies based on project scope, complexity, and requirements. We offer flexible pricing models including project-based, retainer, and subscription options. Contact us for a customized quote.", category: "Pricing"

    }
  ];&quot;

  const helpCategories = [

      icon: BookOpen, articles: 12,
      color: "from-blue-500 to-cyan-500"
    }, { title: "AI Services",
      description: "Learn about our AI and machine learning solutions", icon: MessageCircle,
      articles: 25, color: "from-purple-500 to-pink-500"
    }, { title: "Quantum Computing", description: "Explore quantum computing capabilities",
      icon: Star, articles: 18,
      color: "from-orange-500 to-red-500"
    }, { title: "Technical Support",
      description: "Get help with technical issues", icon: HelpCircle,
      articles: 30, color: "from-green-500 to-emerald-500"

    }
  ];

  const contactMethods = [

      icon: MessageCircle, availability: "24/7 Available",
      responseTime: "Immediate"
    }, { title: "Phone Support",
      description: "Speak directly with our technical experts", icon: Phone,
      availability: "Mon-Fri 9AM-6PM EST", responseTime: "Immediate"
    },

      icon: Mail,
      availability: "24/7 Available", responseTime: "Within 4 hours"

    }
  ];

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);

  return (
    <>
      <SEO 
        title=&quot;Help Center - Zion Tech Group | Support & Documentation&quot;
        description=&quot;Get help with Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team for assistance.&quot;
        keywords=&quot;help, support, documentation, FAQ, customer service, Zion Tech Group&quot;
      />&quot;
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Find answers to your questions, access documentation, and get support from our expert team&quot;
              </p>
              
              {/* Search Bar */}
              <div className=&quot;max-w-2xl mx-auto&quot;>&quot;"
                <div className=&quot;relative&quot;>&quot;"
                  <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />&quot;
                  <input
                    type=&quot;text&quot;
                    placeholder=&quot;Search for help articles, guides, or FAQs...&quot;
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}

                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help Categories */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
              {helpCategories.map((category, index) => (&quot}
                <motion.div

                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

              ))}
            </div>;
          </div>;
        </section>;

        {/* FAQ Section */}

              </p>
            </motion.div>

            <div className=&quot;max-w-4xl mx-auto space-y-4&quot;>
              {faqs.map((faq, index) => (&quot}
                <motion.div

                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

                        </span>
                      </div>
                      <h3 className=&quot;text-lg font-semibold text-white&quot;>{faq.question}&quot;</h3>
                    </div>
                    {expandedFAQ === faq.id ? (}
                      <ChevronUp className=&quot;w-6 h-6 text-gray-400&quot; />
                    ) : (&quot;
                      <ChevronDown className=&quot;w-6 h-6 text-gray-400&quot; />
                    )}&quot;
                  </button>
                  {expandedFAQ === faq.id && (}
                    <motion.div

                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: &quot;auto&quot}}
                      exit={{ opacity: 0, height: 0 }}

                    </motion.div>

                  )}
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Contact Support */}

              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Contact Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Can&apos;t find what you&apos;re looking for? Our support team is here to help
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (

                <motion.div

                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

  )}







