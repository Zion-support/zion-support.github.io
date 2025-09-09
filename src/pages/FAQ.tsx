import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, Users, ShoppingCart, Shield, Zap, Globe } from "lucide-react";
>>>>>>> origin/cursor/website-audit-and-enhancement-374e

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
>>>>>>> origin/cursor/website-audit-and-enhancement-45a9
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function FAQ() {
  const faqData = [
    {
      question: "What is Zion Tech Group?",
      answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented professionals with innovative companies, offering a comprehensive platform for AI services, tech talent, and specialized equipment."
    },
    {
      question: "How does the marketplace work?",
      answer: "Our marketplace operates as a two-sided platform where businesses can find AI talent, services, and equipment, while professionals can showcase their skills and find opportunities. All basic listings and connections are completely free."
    },
    {
      question: "What types of services are available?",
      answer: "We offer a wide range of services including AI development, machine learning consulting, software development, IT consulting, data analysis, cloud services, cybersecurity, and specialized IT onsite services."
    },
    {
      question: "How do I find the right talent for my project?",
      answer: "You can browse our talent directory, use our AI-powered matching system, post job listings, or request quotes for specific projects. Our platform includes detailed profiles, skill assessments, and verified reviews to help you make informed decisions."
    },
    {
      question: "What equipment and hardware is available?",
      answer: "Our marketplace includes specialized AI hardware, servers, networking equipment, development tools, and other tech equipment. We also feature Green IT solutions for sustainable technology practices."
    },
    {
      question: "Is there a cost to use the platform?",
      answer: "Basic access to our marketplace is completely free. This includes browsing listings, creating profiles, and making initial connections. Premium features and advanced tools are available through our enterprise plans."
    },
    {
      question: "How do you ensure quality and reliability?",
      answer: "We implement a comprehensive verification system including profile verification, skill assessments, client reviews, and dispute resolution processes. Our community-driven approach helps maintain high standards across the platform."
    },
    {
      question: "What support is available for users?",
      answer: "We provide 24/7 customer support through our chat system, email support, and comprehensive help center. Enterprise clients also receive dedicated account management and priority support."
    },
    {
      question: "Can I use Zion for both hiring and finding work?",
      answer: "Yes! Many users maintain both client and talent profiles, allowing them to hire for projects while also offering their own services. This flexibility makes Zion ideal for freelancers, agencies, and growing companies."
    },
    {
      question: "How do you handle payments and contracts?",
      answer: "We provide secure payment processing, milestone-based payment systems, and contract templates. Our platform supports various payment methods and includes built-in dispute resolution for project protection."
    },
    {
      question: "What makes Zion different from other platforms?",
      answer: "Zion is specifically designed for AI and high-tech industries, offering specialized tools, AI-powered matching, comprehensive equipment listings, and a focus on sustainable technology. Our free model makes advanced tech accessible to businesses of all sizes."
    },
    {
      question: "How can I get started on Zion?",
      answer: "Getting started is simple! Create a free account, complete your profile, and start exploring the marketplace. You can immediately browse listings, connect with professionals, or showcase your own services and expertise."
      title: "Getting Started",
      icon: Zap,
      questions: [
        {
          question: "How do I create an account on Zion?",
          answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner and choose whether you're a client looking for services or talent offering your skills. Fill in your basic information and verify your email to get started."
        },
        {
          question: 'Do you work with small businesses?',
          answer: 'Yes! We work with businesses of all sizes, from startups to Fortune 500 companies. We offer scalable solutions that grow with your business.'
        }
      ]
    },
    {
      category: "For Talent & Creators",
      questions: [
        {
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including custom machine learning models, natural language processing, computer vision, predictive analytics, and AI-powered business automation solutions.'
        },
        {
          question: 'How long does it take to implement AI solutions?',
          answer: 'Implementation time varies based on complexity. Simple AI integrations can take 2-4 weeks, while complex enterprise AI systems may take 3-6 months. We provide detailed timelines during consultation.'
        },
        {
          question: 'Do you provide AI training for staff?',
          answer: 'Yes, we offer comprehensive training programs to help your team understand and effectively use AI tools. This includes workshops, documentation, and ongoing support.'
        },
        {
          question: 'Can you integrate with existing AI tools?',
          answer: 'Absolutely! We specialize in integrating new AI solutions with existing systems and tools. We ensure seamless compatibility and minimal disruption to your current operations.'
        }
      ]
    },
    {
      category: "For Clients & Employers",
      questions: [
        {
          question: 'Which cloud platforms do you support?',
          answer: 'We support all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud solutions. We help you choose the best platform for your specific needs.'
        },
        {
          question: 'What DevOps services do you provide?',
          answer: 'Our DevOps services include CI/CD pipeline setup, infrastructure as code, container orchestration, monitoring and logging, security automation, and performance optimization.'
        },
        {
          question: "How do I ensure quality work?",
          answer: "Review talent profiles, check ratings and reviews, request portfolios, and start with smaller projects to test the relationship. Our dispute resolution system also protects both parties."
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
      title: "For Clients",
      icon: Users,
      questions: [
        {
          question: "How do I find the right talent for my project?",
          answer: "You can search for talent using our AI-powered matching system, browse categories, or post a job listing. Our platform will suggest the best matches based on your requirements, budget, and timeline."
        },
        {
          question: 'Can you help migrate from on-premise to cloud?',
          answer: 'Yes! We specialize in cloud migration strategies, including assessment, planning, execution, and optimization. We ensure minimal downtime and risk during migration.'
        }
      ]
    },
    cybersecurity: {
      title: 'Cybersecurity',
      icon: '🔒',
      questions: [
        {
          question: 'What cybersecurity services do you offer?',
          answer: 'We provide comprehensive cybersecurity services including security audits, threat detection, incident response, compliance management, penetration testing, and security awareness training.'
        },
        {
          question: 'Do you help with compliance requirements?',
          answer: 'Yes, we help businesses meet various compliance requirements including SOC2, GDPR, HIPAA, PCI-DSS, and industry-specific regulations. We provide ongoing compliance monitoring and reporting.'
        },
        {
          question: 'How quickly can you respond to security incidents?',
          answer: 'Our incident response team is available 24/7 and can respond to critical security incidents within 15 minutes. We provide immediate containment and recovery services.'
        },
        {
          question: 'Do you provide security training for employees?',
          answer: 'Yes, we offer comprehensive security awareness training programs to help your team recognize and prevent security threats. This includes phishing simulations and regular security updates.'
        }
      ]
    },
    {
      category: "Marketplace & Services",
      questions: [
        {
          question: 'How do you structure your pricing?',
          answer: 'We offer flexible pricing models including project-based pricing, monthly retainers, and pay-per-use options. Pricing depends on the scope, complexity, and duration of your project.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, we provide free initial consultations to understand your needs and provide recommendations. This helps us create a tailored proposal for your specific requirements.'
        },
        {
          question: "Are there any guarantees on services?",
          answer: "Yes, we offer satisfaction guarantees and our dispute resolution system ensures fair outcomes. Most professionals also offer revisions and support to ensure your complete satisfaction."
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
      title: "Platform Features",
      icon: ShoppingCart,
      questions: [
        {
          question: "What is the AI Matcher feature?",
          answer: "Our AI Matcher uses advanced algorithms to connect clients with the perfect talent based on project requirements, skills, availability, and budget. It saves time and ensures better matches."
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects. We can structure payments to align with project milestones or your budget requirements.'
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: 'What support do you provide after project completion?',
          answer: 'We provide comprehensive post-project support including maintenance, updates, troubleshooting, and ongoing optimization. We offer various support packages to meet your needs.'
        },
        {
          question: 'Is support available 24/7?',
          answer: 'Yes, we provide 24/7 support for critical issues. Enterprise clients have dedicated support teams, while standard clients have access to our support portal and emergency hotline.'
        },
        {
          question: 'How do you handle system updates?',
          answer: 'We provide proactive system updates and maintenance to ensure optimal performance and security. Updates are scheduled during low-traffic periods to minimize disruption.'
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

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help via email",
      contact: "support@ziontechgroup.com",
      icon: HelpCircle
    },
    {
      title: "Commercial Inquiries",
      description: "For business partnerships",
      contact: "commercial@ziontechgroup.com",
      icon: Users
>>>>>>> origin/cursor/website-audit-and-enhancement-374e
    }
  ];

  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions" 
        description="Find answers to common questions about Zion Tech Group's AI and tech marketplace platform."
        keywords="FAQ, Zion Tech Group, AI marketplace, tech platform, questions, support"
        canonical="https://ziontechgroup.com/faq"
      />
      <Header />
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

  const filteredFAQs = Object.entries(faqData).filter(([category, data]) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return data.questions.some(q => 
      q.question.toLowerCase().includes(searchLower) || 
      q.answer.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Find answers to common questions about our services, pricing, and how we can help transform your business.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{data.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{data.title}</h2>
                </div>
                {openCategories.includes(category) ? (
                  <ChevronUp className="w-6 h-6 text-zion-cyan" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-zion-cyan" />
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-zion-slate-light mb-8">
              Can't find what you're looking for? Our support team is here to help.
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
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Chat with our support team in real-time
              </p>
              <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Start Chat
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <Phone className="w-12 h-12 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Speak directly with our experts
              </p>
              <a 
                href="tel:+13024640950"
                className="inline-block bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <Mail className="w-12 h-12 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Send us a detailed message
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Send Email
              </Link>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/90 mb-6">
              Let's discuss your project requirements and create a custom solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
              >
                Contact Support
              </a>
              <a
                href="/help-center"
                className="inline-flex items-center justify-center px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-colors"
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
              >
                Get a Quote
              </Link>
            </div>
}
>>>>>>> origin/cursor/website-audit-and-enhancement-6726
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group's AI and technology marketplace platform."
        keywords="FAQ, help, support, Zion Tech Group, AI marketplace, tech platform"
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion's AI and tech marketplace platform, services, and how to get started."
        keywords="FAQ, help, support, Zion marketplace, AI services, tech talent"
>>>>>>> origin/cursor/website-audit-and-enhancement-374e
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to the most common questions about Zion Tech Group and our marketplace platform
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-zion-blue-light">
                  <AccordionTrigger className="text-left text-white hover:text-zion-cyan px-6 py-4">
                    <span className="text-lg font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-zion-slate-light leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
              <p className="text-zion-slate-light mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple hover:bg-zion-purple-dark text-white font-medium rounded-lg transition-colors"
                >
                  Contact Support
                </a>
                <a 
                  href="/help" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-blue-light hover:border-zion-purple text-white font-medium rounded-lg transition-colors"
                >
                  Help Center
                </a>
              Find answers to common questions about Zion's platform, services, and how to get started
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12 mb-16">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-zion-blue-dark border-zion-blue-light">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-zion-cyan" />
                    <CardTitle className="text-white text-2xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, questionIndex) => (
                      <AccordionItem key={questionIndex} value={`item-${categoryIndex}-${questionIndex}`}>
                        <AccordionTrigger className="text-left text-zion-slate-light hover:text-zion-cyan">
>>>>>>> origin/cursor/website-audit-and-enhancement-374e
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

          {/* Contact Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Still Need Help?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you get the most out of Zion.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <method.icon className="h-5 w-5 text-zion-cyan" />
                      <CardTitle className="text-white">{method.title}</CardTitle>
                    </div>
                    <CardDescription className="text-zion-slate-light">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={`mailto:${method.contact}`}
                      className="text-zion-cyan hover:text-zion-purple transition-colors font-medium"
                    >
                      {method.contact}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline" className="border-zion-blue-light text-white hover:bg-zion-blue-light hover:text-zion-blue">
                <Link to="/help-center">Visit Help Center</Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Navigation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-white font-semibold mb-3">Getting Started</h4>
                <div className="space-y-2">
                  <Link to="/signup" className="block text-zion-cyan hover:text-zion-purple transition-colors">Create Account</Link>
                  <Link to="/about" className="block text-zion-cyan hover:text-zion-purple transition-colors">About Zion</Link>
                  <Link to="/how-it-works" className="block text-zion-cyan hover:text-zion-purple transition-colors">How It Works</Link>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold mb-3">Services</h4>
                <div className="space-y-2">
                  <Link to="/marketplace" className="block text-zion-cyan hover:text-zion-purple transition-colors">Marketplace</Link>
                  <Link to="/services" className="block text-zion-cyan hover:text-zion-purple transition-colors">Services</Link>
                  <Link to="/talent" className="block text-zion-cyan hover:text-zion-purple transition-colors">Find Talent</Link>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold mb-3">Support</h4>
                <div className="space-y-2">
                  <Link to="/contact" className="block text-zion-cyan hover:text-zion-purple transition-colors">Contact Us</Link>
                  <Link to="/terms" className="block text-zion-cyan hover:text-zion-purple transition-colors">Terms of Service</Link>
                  <Link to="/privacy" className="block text-zion-cyan hover:text-zion-purple transition-colors">Privacy Policy</Link>
                </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-374e
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
    </>
  );
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
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
}
>>>>>>> origin/cursor/website-audit-and-enhancement-374e
