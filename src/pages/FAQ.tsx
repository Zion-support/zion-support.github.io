<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function FAQ() {
  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented AI specialists, innovative companies, and cutting-edge technological solutions in one seamless ecosystem."
        },
        {
          question: "Is Zion really free to use?",
          answer: "Yes! Zion's core marketplace platform is completely free to use. We believe in democratizing access to AI and technology solutions. Some premium features may have associated costs, but the basic marketplace functionality is free."
        },
        {
          question: "How do you make money if the platform is free?",
          answer: "We generate revenue through premium services, enterprise solutions, and value-added features while keeping the core marketplace free and accessible to everyone."
=======
import React from 'react';
import { AppHeader } from '@/layout/AppHeader';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
>>>>>>> origin/cursor/website-audit-and-enhancement-45a9

export default function FAQ() {
  const faqData = [
    {
<<<<<<< HEAD
      category: "Getting Started",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented professionals, innovative services, and cutting-edge equipment in one comprehensive platform."
        },
        {
          question: "How do I create an account?",
          answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner and choose whether you're a talent/creator or a client/employer. Fill in your details and you'll be ready to start using the platform."
        },
        {
          question: "Is Zion Tech Group really free to use?",
          answer: "Yes! Our core marketplace platform is completely free to use. We believe in democratizing access to tech talent and services. There are no hidden fees or subscription costs for basic usage."
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
        }
      ]
    },
    {
<<<<<<< HEAD
      title: "For Talent & Creators",
      items: [
        {
          question: "How do I create a talent profile?",
          answer: "Simply sign up for an account and select 'Talent' during registration. You can then complete your profile by adding your skills, experience, portfolio, and availability."
        },
        {
          question: "What types of talent are you looking for?",
          answer: "We welcome all AI specialists, developers, data scientists, tech consultants, and technology professionals. Whether you're a freelancer, consultant, or full-time professional, there's a place for you on Zion."
        },
        {
          question: "How do I get hired through Zion?",
          answer: "Create a compelling profile, showcase your work, and actively engage with the community. Clients can discover you through our AI-powered matching system or by browsing talent directories."
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
        }
      ]
    },
    {
<<<<<<< HEAD
      title: "For Clients & Employers",
      items: [
        {
          question: "How do I find the right talent for my project?",
          answer: "Use our AI-powered matching system, browse talent directories by category, or post a job listing. Our platform helps you find the perfect match based on skills, experience, and project requirements."
        },
        {
          question: "What types of services can I find on Zion?",
          answer: "Zion offers a wide range of services including AI development, software engineering, data analysis, IT consulting, equipment rentals, and specialized technology solutions."
        },
        {
          question: "How do I ensure quality when hiring through Zion?",
          answer: "All talent on Zion are verified professionals with reviewed profiles, portfolios, and ratings. You can also review their work history and communicate directly before making hiring decisions."
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
        }
      ]
    },
    {
<<<<<<< HEAD
      title: "Technical & Security",
      items: [
        {
          question: "How secure is my data on Zion?",
          answer: "We implement enterprise-grade security measures including encryption, secure authentication, and regular security audits. Your data is protected and never shared with unauthorized parties."
        },
        {
          question: "What payment methods do you support?",
          answer: "Zion supports multiple payment methods including credit cards, bank transfers, and digital wallets. All transactions are processed securely through our payment partners."
        },
        {
          question: "Can I integrate Zion with my existing systems?",
          answer: "Yes! Zion provides APIs and integration tools for enterprise clients who want to connect our marketplace with their existing workflows and systems."
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
        }
      ]
    },
    {
<<<<<<< HEAD
      title: "Community & Support",
      items: [
        {
          question: "How can I get help if I have issues?",
          answer: "Our support team is available through multiple channels including email, live chat, and our help center. We also have an active community forum where users help each other."
        },
        {
          question: "Are there networking opportunities on Zion?",
          answer: "Absolutely! Zion hosts regular virtual events, webinars, and networking sessions. Our community features allow you to connect with other professionals in your field."
        },
        {
          question: "How can I contribute to Zion's growth?",
          answer: "Share feedback, refer other professionals, participate in community discussions, and help us improve by reporting bugs or suggesting new features."
        }
      ]
>>>>>>> origin/cursor/website-audit-and-enhancement-35e5
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-45a9
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-background">
      <SEO 
        title="FAQ - Zion Tech Group" 
        description="Find answers to frequently asked questions about Zion Tech Group's AI and tech marketplace platform."
        keywords="FAQ, help, support, Zion Tech Group, AI marketplace, tech services"
        canonical="https://ziontechgroup.com/faq"
      />
      
      <AppHeader />
      
      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find answers to common questions about Zion Tech Group's AI and tech marketplace platform
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8">
              {faqData.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="border-zion-purple/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-zion-cyan">
                      {category.category}
                    </CardTitle>
                    <CardDescription>
                      Common questions about {category.category.toLowerCase()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, questionIndex) => (
                        <AccordionItem 
                          key={questionIndex} 
                          value={`item-${categoryIndex}-${questionIndex}`}
                          className="border-zion-purple/10"
                        >
                          <AccordionTrigger className="text-left hover:text-zion-cyan transition-colors">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-zion-slate-light leading-relaxed">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="bg-zion-blue-dark py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you with any questions or concerns.
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
<<<<<<< HEAD
                className="bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
=======
                className="inline-flex items-center justify-center px-6 py-3 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
              >
                Contact Support
              </a>
              <a
                href="/help-center"
<<<<<<< HEAD
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors"
=======
                className="inline-flex items-center justify-center px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-colors"
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
              >
                Visit Help Center
              </a>
            </div>
<<<<<<< HEAD
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
=======
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group's AI and technology marketplace platform."
        keywords="FAQ, help, support, Zion Tech Group, AI marketplace, tech platform"
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to the most common questions about Zion Tech Group
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-zion-blue-dark border border-zion-blue-light mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">{category.title}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
                        <AccordionTrigger className="text-left text-zion-cyan hover:text-zion-cyan-light">
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

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Still have questions?</h2>
              <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you get the answers you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-medium rounded-lg transition-all"
                >
                  Contact Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-medium rounded-lg transition-all"
                >
                  Visit Contact Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-35e5
=======
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
=======
    <div className="min-h-screen bg-background">
      <SEO 
        title="FAQ - Zion Tech Group" 
        description="Find answers to frequently asked questions about Zion Tech Group's AI and tech marketplace services."
        keywords="FAQ, Zion Tech Group, AI marketplace, tech services, support"
        canonical="https://ziontechgroup.com/faq"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Get answers to common questions about Zion Tech Group's AI and tech marketplace platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-zion-blue-dark border-zion-purple/20">
            <CardHeader>
              <CardTitle className="text-zion-cyan text-2xl">General Questions</CardTitle>
              <CardDescription className="text-zion-slate-light">
                Everything you need to know about our platform and services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
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

          <div className="mt-12 text-center">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Still have questions?
                </h3>
                <p className="text-zion-slate-light mb-6">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
                  >
                    Contact Support
                  </a>
                  <a
                    href="/help"
                    className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple font-medium rounded-lg hover:bg-zion-purple/10 transition-colors"
                  >
                    Help Center
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-45a9
