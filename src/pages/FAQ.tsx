import React, { useState } from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive technology solutions including AI and machine learning, cloud computing and DevOps, cybersecurity, IT infrastructure management, digital transformation consulting, and enterprise software development. Our services are tailored to help businesses of all sizes leverage cutting-edge technology for growth and efficiency."
    },
    {
      question: "How does Zion Tech Group's AI implementation process work?",
      answer: "Our AI implementation follows a structured approach: 1) Initial consultation and needs assessment, 2) Data analysis and strategy development, 3) Custom solution design and prototyping, 4) Implementation and integration, 5) Testing and optimization, 6) Training and deployment support. We ensure seamless integration with your existing systems and provide ongoing maintenance and updates."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, transportation, and professional services. Our solutions are adaptable to any industry that can benefit from digital transformation, AI implementation, or improved IT infrastructure."
    },
    {
      question: "How long does a typical project take to complete?",
      answer: "Project timelines vary depending on complexity and scope. Small AI implementations can take 4-8 weeks, while large-scale digital transformations may take 6-12 months. We provide detailed project timelines during the initial consultation and maintain transparent communication throughout the process."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-implementation support including 24/7 monitoring, regular maintenance, updates, and technical support. We also provide training for your team and can scale our support based on your needs."
    },
    {
      question: "What cybersecurity measures do you implement?",
      answer: "Our cybersecurity approach includes comprehensive threat detection, vulnerability assessments, compliance frameworks (SOC 2, ISO 27001, GDPR), real-time monitoring, incident response planning, and regular security audits. We ensure your data and systems remain protected against evolving threats."
    },
    {
      question: "How do you ensure data privacy and compliance?",
      answer: "We strictly adhere to international privacy standards including GDPR, CCPA, and industry-specific regulations. Our solutions include data encryption, access controls, audit trails, and privacy-by-design principles. We also provide compliance documentation and regular privacy assessments."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including project-based pricing, subscription services, and managed services agreements. Pricing depends on project scope, complexity, and ongoing support requirements. We provide detailed proposals with transparent pricing during the consultation phase."
    },
    {
      question: "Do you work with small businesses or only enterprise clients?",
      answer: "We work with businesses of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and we customize our approach based on your business size, budget, and specific needs. We believe every business deserves access to cutting-edge technology solutions."
    },
    {
      question: "How do I get started with Zion Tech Group?",
      answer: "Getting started is easy! Simply contact us through our website, email us at contact@ziontechgroup.com, or call us at +1-302-464-0950. We'll schedule a free consultation to discuss your needs and provide a customized proposal. No obligation required."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>FAQ - Zion Tech Group</title>
        <meta name="description" content="Frequently asked questions about Zion Tech Group's services, AI solutions, cybersecurity, and digital transformation expertise. Get answers to common questions about working with us." />
        <meta name="keywords" content="FAQ, frequently asked questions, Zion Tech Group, AI services, cybersecurity, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help transform your business
=======
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SEO } from '@/components/SEO';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Zion Tech Group?",
    answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with AI specialists, tech talent, and cutting-edge equipment.",
    category: "General"
  },
  {
    question: "How does the marketplace work?",
    answer: "Our marketplace allows businesses to browse and hire AI specialists, find tech services, and purchase equipment. Talented professionals can showcase their skills and connect with potential clients.",
    category: "General"
  },
  {
    question: "Is Zion really free to use?",
    answer: "Yes! Zion is completely free to use for both businesses and talent. We believe in democratizing access to AI and technology solutions.",
    category: "General"
  },
  {
    question: "How do I get started as a talent/creator?",
    answer: "Simply sign up for an account, complete your profile with your skills and experience, and start receiving job opportunities from businesses looking for your expertise.",
    category: "Talent"
  },
  {
    question: "How do I hire talent or services?",
    answer: "Browse our marketplace, filter by skills, location, or budget, and connect with talented professionals. You can also post job listings to attract the right candidates.",
    category: "Business"
  },
  {
    question: "What types of services are available?",
    answer: "We offer a wide range of services including AI development, web development, mobile apps, data science, cybersecurity, cloud services, and much more.",
    category: "Services"
  },
  {
    question: "How do you verify talent and services?",
    answer: "We have a comprehensive verification process including skill assessments, portfolio reviews, and client feedback to ensure quality and reliability.",
    category: "General"
  },
  {
    question: "Can I work remotely?",
    answer: "Absolutely! Many of our opportunities are remote-friendly, allowing you to work with clients from anywhere in the world.",
    category: "Talent"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We support various payment methods including credit cards, bank transfers, and digital wallets. All payments are processed securely through our platform.",
    category: "Business"
  },
  {
    question: "How do disputes get resolved?",
    answer: "We have a dedicated dispute resolution team that works to fairly resolve any issues between clients and talent. Our goal is to ensure satisfaction for all parties.",
    category: "General"
  },
  {
    question: "Do you offer support for enterprise clients?",
    answer: "Yes! We have dedicated enterprise solutions with additional features, priority support, and custom integrations for larger organizations.",
    category: "Business"
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our support team through our contact page, email, or live chat. We're available 24/7 to help with any questions or issues.",
    category: "General"
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];
  const filteredFAQ = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="FAQ - Zion Tech Group" 
        description="Find answers to frequently asked questions about Zion Tech Group's AI marketplace and services."
        keywords="FAQ, frequently asked questions, Zion Tech Group, AI marketplace, support"
        canonical="https://ziontechgroup.com/faq"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Find answers to common questions about Zion Tech Group and our AI marketplace
>>>>>>> origin/cursor/website-audit-and-enhancement-6726
          </p>
        </div>
      </section>

<<<<<<< HEAD
      {/* FAQ Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg border border-white/10 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:bg-slate-700/50 transition-colors duration-300"
                >
                  <span className="text-lg font-medium">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
=======
      {/* FAQ Content */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark'
                    : 'bg-zion-blue-light/20 text-white hover:bg-zion-purple/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQ.map((item, index) => (
              <div
                key={index}
                className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-zion-purple/10 transition-colors"
                >
                  <span className="text-white font-semibold text-lg">{item.question}</span>
                  {openItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zion-cyan" />
                  )}
                </button>
                
                {openItems.has(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-zion-slate-light leading-relaxed">{item.answer}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-6726
                  </div>
                )}
              </div>
            ))}
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find the answer you're looking for? Our team is here to help. 
            Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@ziontechgroup.com"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
=======

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-zion-slate-light mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/help-center"
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors"
              >
                Visit Help Center
              </a>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-6726
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default FAQ;
=======
}
>>>>>>> origin/cursor/website-audit-and-enhancement-6726
