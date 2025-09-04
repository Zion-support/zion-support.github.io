import React from 'react',;',';';
    ';';';';
import {SEO } from '@/components/SEO';
,"});,"})
export default function Help() {return (
    <div className="min-h-screen bg-white">
      <SEO title="Help - Zion Tech Group" description="Professional Help services by Zion Tech Group"  />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Help</h1>
        <p className="text-gray-300 text-lg">
          Professional Help services to help your business grow.
        </p>
      </div>';
    </div>';';
  );';';';
}',';';
    ';';';
import React, { useState } from &apos;react',';';';
    ',';';
    ';';';
import { motion } from &apos;framer-motion';';';';';
import { SEO } from &apos;../components/SEO',',';';
    ';';';';
import React, { useState } from 'react';""',';';
    ';';';
import { motion } from 'framer-motion';""',';';
    ';';';
import { SEO  } from '../components/SEO';';';
import { ;';';';
  Search, MessageCircle, Phone, Mail, Clock, BookOpen, Video, FileText, Users, ChevronDown,;',';';
    ';';';
  ChevronUp, HelpCircle, CheckCircle, ArrowRight',';';';
    ',';';
    ';';';
} from 'lucide-react';';';';
  ChevronUp, HelpCircle, CheckCircle, ArrowRight;", ";',';';
    ';';';
} from 'lucide-react';""',';';
    ';';';
import React, { useState } from 'react';';';';
import { motion } from 'framer-motion;',';';
    ';';';
import { SEO } from '../components/SEO';';
import { ;';';
  Search, MessageCircle, Phone, Mail, Clock, ;';';';
  BookOpen, Video, FileText, Users, ChevronDown,;',';';
    ';';';
  ChevronUp, HelpCircle, CheckCircle, ArrowRight} from 'lucide-react';';';';
export default function Help() {;',';';
    ';';';
  const [searchQuery, setSearchQuery] = useState(');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
const faqs = [' {;';';
      id: 1';';';
      question: "How do I get started with Zion Tech Group services?"',';';
    ';';';
      answer: "Getting started is easy! Contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business."
      category: "Getting Started"}, {;
      id: 2 question: "What AI services do you offer?"
      answer: "We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, and custom AI solutions tailored to your business needs.",;
      category: "AI Services"}, {;
      id: 3 question: "Do you provide quantum computing solutions?"
      answer: "Yes! We offer quantum computing services including quantum algorithm development, quantum machine learning, and access to quantum computing platforms for research and development.",;
      category: "Quantum Computing"}, {;
      id: 4 question: "What is your pricing structure?"
      answer: "Our pricing varies based on project scope, complexity, and requirements. We offer flexible pricing models including project-based, retainer, and subscription options. Contact us for a customized quote.",;
      category: "Pricing"}
  ]
;
  const helpCategories = [
  {;
      title: "Getting Started"
      description: "New to Zion Tech Group? Start here"
      icon: BookOpen articles: 12
      color: "from-blue-500 to-cyan-500"}, {;
      title: "AI Services"
      description: "Learn about our AI and machine learning solutions"
      icon: MessageCircle articles: 25
      color: "from-purple-500 to-pink-500"}, {;
      title: "Quantum Computing"
      description: "Explore quantum computing capabilities"
      icon: Star articles: 18
      color: "from-orange-500 to-red-500"}, {;
      title: "Technical Support"
      description: "Get help with technical issues"
      icon: HelpCircle articles: 30
      color: "from-green-500 to-emerald-500"}
  ]
;
  const contactMethods = [
  {;
      title: "Live Chat"
      description: "Get instant help from our support team"
      icon: MessageCircle availability: "24/7 Available"
      responseTime: "Immediate"}, {;
      title: "Phone Support"
      description: "Speak directly with our technical experts"
      icon: Phone availability: "Mon-Fri 9AM-6PM EST"';
      responseTime: "Immediate"},;';' {;';';';
      title: "Email Support"',';';
    ';';';
      description: "Send us your questions and we'll respond quickly"
      icon: Mail availability: "24/7 Available"
      responseTime: "Within 4 hours"}
  ]
;
  const toggleFAQ = (id: number) => {;
    setExpandedFAQ(expandedFAQ === id ? null : id)};
return (
    <>;
      <SEO ;
        title="Help Center - Zion Tech Group | Support & Documentation";
        description="Get help with Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team for assistance.";
        keywords="help, support, documentation, FAQ, customer service, Zion Tech Group";
       />;
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"> {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 2 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto";
            >;
              <h1 className="text-5xl md: tex t-6xl font-bold text-white mb-6">;
                Help Center;
              </h1>;
              <p className="text-xl text-gray-300 mb-8">;
                Find answers to your questions, access documentation, and get support from our expert team;
              </p> {/* Search Bar */}
              <div className="max-w-2xl mx-auto">;
                <div className="relative">;
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />;
                  <input;
                    type="text";
                    placeholder="Search for help articles, guides, or FAQs...";
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)
      )}
    </div>
  );
}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent";
                  />;
                </div>
  );
}
              </div>
  );
}
            </motion.div>;
          </div>
  );
}
        </section> {/* Help Categories */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 2 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">Browse by Category</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Find the help you need organized by topic and service area;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"> {helpCategories.map((category, index) => (;';
                <motion.div;';';
import { ;';';';
  Search, MessageCircle, Phone, Mail, Clock, BookOpen, Video, FileText, Users, ChevronDown,;',';';
    ';';';
  ChevronUp, HelpCircle, CheckCircle, ArrowRight} from &apos;lucide-react';&apos;&apos;
export default function Help()  {}
  const [searchQuery, setSearchQuery] = useState(&apos;&apos);&apos;&apos;';
  const [expandedFAQ, setExpandedFAQ] = useState<;<;<number | null>(null);';';
  const faqs = [';';' { id: 1, question: "How do I get started with Zion Tech Group services?",',';';
    ';';';
      answer: "Getting started is easy! Contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business.", '
    {
      id: 1,
      question: &quot;How do I get started with Zion Tech Group services?&quot,
      answer: &quot;Getting started is easy! Contact our team through our contact form or call us directly. We&apos;ll schedule a consultation to understand your needs and recommend the best solutions for your business.&quot,
      category: &quot;Getting Started&quot},
    {
      id: 2,
      question: &quot;What AI services do you offer?&quot,
      answer: &quot;We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, and custom AI solutions tailored to your business needs.&quot,
      category: &quot;AI Services&quot},
    {
      id: 3,
      question: &quot;Do you provide quantum computing solutions?&quot,
      answer: &quot;Yes! We offer quantum computing services including quantum algorithm development, quantum machine learning, and access to quantum computing platforms for research and development.&quot,
      category: &quot;Quantum Computing&quot},
    {
      id: 4,
      question: &quot;What is your pricing structure?&quot,';
      answer: &quot;Our pricing varies based on project scope, complexity, and requirements. We offer flexible pricing models including project-based, retainer, and subscription options. Contact us for a customized quote.&quot,';';
      category: &quot;Pricing&quot;';';';
      id: 1, question: "How do I get started with Zion Tech Group services?",',';';
    ';';';
      answer: "Getting started is easy! Contact our team through our contact form or call us directly. We&apos;ll schedule a consultation to understand your needs and recommend the best solutions for your business.", '
      category: "Getting Started"},
    { id: 2, question: "What AI services do you offer?",
      answer: "We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, and custom AI solutions tailored to your business needs.", category: "AI Services"},
    { id: 3, question: "Do you provide quantum computing solutions?",
      answer: "Yes! We offer quantum computing services including quantum algorithm development, quantum machine learning, and access to quantum computing platforms for research and development.", category: "Quantum Computing"},
    { id: 4, question: "What is your pricing structure?",
      answer: "Our pricing varies based on project scope, complexity, and requirements. We offer flexible pricing models including project-based, retainer, and subscription options. Contact us for a customized quote.", category: "Pricing"}
  ]&quot;
  const helpCategories = [
    { title: "Getting Started", description: "New to Zion Tech Group? Start here",
    {
      title: &quot;Getting Started&quot,
      description: &quot;New to Zion Tech Group? Start here&quot,
      icon: BookOpe n,
      articles: 1 2,
      color: &quot;from-blue-500 to-cyan-500&quot},
    {
      title: &quot;AI Services&quot,
      description: &quot;Learn about our AI and machine learning solutions&quot,
      icon: MessageCircl e,
      articles: 2 5,
      color: &quot;from-purple-500 to-pink-500&quot},
    {
      title: &quot;Quantum Computing&quot,
      description: &quot;Explore quantum computing capabilities&quot,
      icon: Sta r,
      articles: 1 8,
      color: &quot;from-orange-500 to-red-500&quot},
    {
      title: &quot;Technical Support&quot,
      description: &quot;Get help with technical issues&quot,
      icon: HelpCircl e,
      articles: 3 0,
      color: &quot;from-green-500 to-emerald-500&quot;
      title: "Getting Started", description: "New to Zion Tech Group? Start here",
      icon: BookOpe n, articles: 1 2,
      color: "from-blue-500 to-cyan-500"}, { title: "AI Services",
      description: "Learn about our AI and machine learning solutions", icon: MessageCircl e,
      articles: 2 5, color: "from-purple-500 to-pink-500"},
    { title: "Quantum Computing", description: "Explore quantum computing capabilities",
      icon: Sta r, articles: 1 8,
      color: "from-orange-500 to-red-500"}, { title: "Technical Support",
      description: "Get help with technical issues", icon: HelpCircl e,
      articles: 3 0, color: "from-green-500 to-emerald-500"}
  ]&quot;
  const contactMethods = [
    { title: "Live Chat", description: "Get instant help from our support team",
    {
      title: &quot;Live Chat&quot,
      description: &quot;Get instant help from our support team&quot,
      icon: MessageCircl e,
      availability: &quot;24/7 Available&quot,
      responseTime: &quot;Immediate&quot},
    {
      title: &quot;Phone Support&quot,
      description: &quot;Speak directly with our technical experts&quot,
      icon: Phon e,
      availability: &quot;Mon-Fri 9AM-6PM EST&quot,
      responseTime: &quot;Immediate&quot},
    {
      title: &quot;Email Support&quot,
      description: &quot;Send us your questions and we&apos;ll respond quickly&quot,
      icon: Mai l,
      availability: &quot;24/7 Available&quot,
      responseTime: &quot;Within 4 hours&quot;
      title: "Live Chat", description: "Get instant help from our support team",
      icon: MessageCircl e, availability: "24/7 Available",';
      responseTime: "Immediate"}, { title: "Phone Support",';';
      description: "Speak directly with our technical experts", icon: Phon e,';';';
      availability: "Mon-Fri 9AM-6PM EST", responseTime: "Immediate"},',';';
    ';';' { title: "Email Support", description: "Send us your questions and we'll respond quickly", '';';' {',';';
    ';';';
      title: "Email Support", description: "Send us your questions and we&apos;ll respond quickly", '
      icon: Mai l,
      availability: "24/7 Available", responseTime: "Within 4 hours"}
  ]&quot;
  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
      )}
    </div>
  );
}
  };
  return (
    <>
      <SEO title=&quot;Help Center - Zion Tech Group | Support & Documentation&quot;
        description=&quot;Get help with Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team for assistance.&quot;
        keywords=&quot;help, support, documentation, FAQ, customer service, Zion Tech Group&quot;
       />&quot;
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 2 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8   }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md: tex t-6xl font-bold text-white mb-6">
                Help Center
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h1 className=&quot;text-5xl md: tex t-6xl font-bold text-white mb-6&quot;>
                Help Center&quot;
              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Find answers to your questions, access documentation, and get support from our expert team&quot;
              </p>
              {/* Search Bar */}
              <div className=&quot;max-w-2xl mx-auto&quot;>&quot;"
                <div className=&quot;relative&quot;>&quot;"
                  <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot;  />&quot;
                  <input
                    type=&quot;text&quot;
                    placeholder=&quot;Search for help articles, guides, or FAQs...&quot;
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)
      )}
    </div>
  );
}
                    className=&quot;w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focu,s: borde r-transparent&quot;
                  />&quot;
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Help Categories */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 2 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8   }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Browse by Category</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the help you need organized by topic and service area
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Browse by Category&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Find the help you need organized by topic and service area&quot;
              </p>
            </motion.div>
            <div className=&quot;grid grid-cols-1 md: gri d-cols-2 l,g: gri d-cols-4 gap-8&quot;>
              {helpCategories.map((category, index) => (&quot}
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 2 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: inde x * 0.1 }}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: borde r-cyan-400/50 transition-all duration-300 hover: scal e-105 cursor-pointer`;
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>;
                    <category.icon className=`w-8 h-8 text-white`} />;
                  </div>
  );
}
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>;
                  <p className="text-gray-300 text-sm mb-3">{category.description}</p>;
                  <div className="flex items-center justify-between">;
                    <span className="text-blue-400 text-sm">{category.articles} articles</span>;
                    <ArrowRight className={`w-5 h-5 text-gray-400`  />;
                  </div>
  );
}
                </motion.div>;
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: borde r-cyan-400/50 transition-all duration-300 hove,r: scal e-105 cursor-pointer&quot;
                >&quot;
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                    <category.icon className=&quot;w-8 h-8 text-white&quot; />&quot;
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{category.title}&quot;</h3>
                  <p className=&quot;text-gray-300 text-sm mb-3&quot;>{category.description}&quot;</p>
                  <div className=&quot;flex items-center justify-between&quot;>&quot;`
                    <span className=&quot;text-blue-400 text-sm&quot;>{category.articles} articles&quot;</span>
                    <ArrowRight className=&quot;w-5 h-5 text-gray-400&quot;  />&quot;
                  </div>
                </motion.div>
              ))
      )}
    </div>
  );
}
            </div>
  );
}
          </div>
  );
}
        </section> {/* FAQ Section */}
        <section className=`}py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 2 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Quick answers to the most common questions about our services;
              </p>;
            </motion.div>;
            <div className="max-w-4xl mx-auto space-y-4"> {faqs.map((faq, index) => (;
                <motion.div;
        <section className=&quot;py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 2 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8   }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quick answers to the most common questions about our services
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Frequently Asked Questions&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Quick answers to the most common questions about our services&quot;
              </p>
            </motion.div>
            <div className=&quot;max-w-4xl mx-auto space-y-4&quot;>
              {faqs.map((faq, index) => (&quot}
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 2 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: inde x * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden";
                >;
                  <button;
                    onClick={() => toggleFAQ(faq.id)
      )}
    </div>
  );
}
                    className="w-full p-6 text-left flex items-center justify-between hover: b g-slate-700/30 transition-colors";
                  >;
                    <div className="flex-1">;
                      <div className="flex items-center mb-2">;
                        <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs mr-3"> {faq.category}
                        </span>;
                      </div>
  );
}
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>;
                    </div>
  );
}
                    {expandedFAQ === faq.id ? (;
                      <ChevronUp className="w-6 h-6 text-gray-400"  />;
                    ) : (;
                      <ChevronDown className="w-6 h-6 text-gray-400"  />;
                    )
      )}
    </div>
  );
}
                  </button> {expandedFAQ === faq.id && (;
                    <motion.div;
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden&quot;
                >&quot;
                  <button
                    onClick={() => toggleFAQ(faq.id)
      )}
    </div>
  );
}
                    className=&quot;w-full p-6 text-left flex items-center justify-between hover: b g-slate-700/30 transition-colors&quot;
                  >&quot;
                    <div className=&quot;flex-1&quot;>&quot;"
                      <div className=&quot;flex items-center mb-2&quot;>&quot;"
                        <span className=&quot;px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs mr-3&quot;>
                          {faq.category}&quot;
                    className="w-full p-6 text-left flex items-center justify-between hover: b g-slate-700/30 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs mr-3">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className=&quot;text-lg font-semibold text-white&quot;>{faq.question}&quot;</h3>
                    </div>
                    {expandedFAQ === faq.id ? (}
                      <ChevronUp className=&quot;w-6 h-6 text-gray-400&quot;  />
                    ) : (&quot;
                      <ChevronDown className=&quot;w-6 h-6 text-gray-400&quot;  />
                    )}&quot;
                  </button>
                  {expandedFAQ === faq.id && (}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: &quot;auto&quot}}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3   }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6";
                    >;
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>;
                    </motion.div>;
                      className=&quot;px-6 pb-6&quot;
                    >&quot;
                      <p className=&quot;text-gray-300 leading-relaxed&quot;>{faq.answer}&quot;</p>
                    </motion.div>
                  )
      )}
    </div>
  );
}
                </motion.div>;
              ))
      )}
    </div>
  );
}
            </div>
  );
}
          </div>
  );
}
        </section> {/* Contact Support */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 2 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12";';
            >;';';
              <h2 className="text-4xl font-bold text-white mb-4">Contact Support</h2>;';';';
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;',';';
    ';';';
                Can't find what you're looking for? Our support team is here to help;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md: gri d-cols-3 gap-8"> {contactMethods.map((method, index) => (;
                <motion.div;
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 2 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8   }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Contact Support&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Can&apos;t find what you&apos;re looking for? Our support team is here to help&apos;
              </p>
            </motion.div>
            <div className=&quot;grid grid-cols-1 md: gri d-cols-3 gap-8&quot;>
              {contactMethods.map((method, index) => (&quot}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Contact Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Can&apos;t find what you&apos;re looking for? Our support team is here to help
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md: gri d-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 2 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: inde x * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: borde r-blue-400/50 transition-all duration-300";
                >;
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">;
                    <method.icon className="w-8 h-8 text-white" />;
                  </div>
  );
}
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>;
                  <p className="text-gray-300 text-sm mb-4">{method.description}</p>;
                  <div className="space-y-2 mb-6">;
                    <div className="flex items-center text-sm text-gray-400">;
                      <Clock className="w-4 h-4 mr-2"  /> {method.availability}
                    </div>
  );
}
                    <div className="flex items-center text-sm text-gray-400">;
                      <CheckCircle className="w-4 h-4 mr-2"  />;
                      Response: {method.responseTime}
                    </div>
  );
}
                  </div>
  );
}
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: fro m-blue-700 hover: t o-purple-700 transition-all duration-200"> {method.title}
                  </button>;
                </motion.div>;
              ))
      )}
    </div>
  );
}
            </div>
  );
}
          </div>
  );
}
        </section>;
      </div>
  );
}
    </>;
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: borde r-blue-400/50 transition-all duration-300&quot;
                >&quot;
                  <div className=&quot;w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4&quot;>&quot;"
                    <method.icon className=&quot;w-8 h-8 text-white&quot; />&quot;
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{method.title}&quot;</h3>
                  <p className=&quot;text-gray-300 text-sm mb-4&quot;>{method.description}&quot;</p>
                  <div className=&quot;space-y-2 mb-6&quot;>&quot;"
                    <div className=&quot;flex items-center text-sm text-gray-400&quot;>&quot;"
                      <Clock className=&quot;w-4 h-4 mr-2&quot;  />
                      {method.availability}&quot;
                    </div>
                    <div className=&quot;flex items-center text-sm text-gray-400&quot;>&quot;"
                      <CheckCircle className=&quot;w-4 h-4 mr-2&quot;  />
                      Response: {method.responseTime}&quot;
                    </div>
                  </div>
                  <button className=&quot;w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: fro m-blue-700 hove,r: t o-purple-700 transition-all duration-200&quot;>
                    {method.title}&quot;
                  </button>
                </motion.div>
              ))
      )}
    </div>
  );
}
            </div>
          </div>
        </section>
      </div>
</>
  );';
}';';
  );';';';
}',';';
    ';';';
  ChevronUp, HelpCircle, CheckCircle, ArrowRight;"} from 'lucide-react';';';
"';';';';