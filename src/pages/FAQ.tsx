import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
=======
=======
import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, Users, ShoppingCart, Shield, Zap, Globe } from "lucide-react";
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
=======
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
        }
      ]
    },
    {
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
=======
      title: "For Clients",
      icon: Users,
      questions: [
        {
          question: "How do I find the right talent for my project?",
          answer: "You can search for talent using our AI-powered matching system, browse categories, or post a job listing. Our platform will suggest the best matches based on your requirements, budget, and timeline."
        },
        {
          question: "What services can I find on Zion?",
          answer: "Zion offers a wide range of services including AI development, web and mobile app development, data science, UI/UX design, IT consulting, equipment rentals, and specialized AI solutions for various industries."
        },
        {
          question: "How do I ensure quality when hiring talent?",
          answer: "All talent on Zion are verified professionals with portfolios, reviews, and ratings. You can review their work history, read client testimonials, and communicate directly before making a decision."
        }
      ]
    },
    {
      title: "For Talent",
      icon: Globe,
      questions: [
        {
          question: "How do I showcase my skills and experience?",
          answer: "Create a comprehensive profile highlighting your expertise, upload portfolio pieces, list your skills, and set your rates. You can also add certifications, education, and work samples to stand out."
        },
        {
          question: "How do I get paid for my work?",
          answer: "Zion offers secure payment processing with milestone-based payments. You can set up payment schedules, track project progress, and receive payments directly through our platform."
        },
        {
          question: "Can I work with international clients?",
          answer: "Absolutely! Zion is a global platform connecting talent and clients worldwide. You can work with clients from any country and expand your professional network internationally."
        }
      ]
    },
    {
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
=======
      title: "Platform Features",
      icon: ShoppingCart,
      questions: [
        {
          question: "What is the AI Matcher feature?",
          answer: "Our AI Matcher uses advanced algorithms to connect clients with the perfect talent based on project requirements, skills, availability, and budget. It saves time and ensures better matches."
        },
        {
          question: "How does the marketplace work?",
          answer: "The marketplace allows you to browse and purchase pre-built AI solutions, equipment, and services. You can also request custom quotes for specific projects or needs."
        },
        {
          question: "What community features are available?",
          answer: "Join our community forums to connect with other professionals, share knowledge, ask questions, and stay updated on the latest AI and tech trends."
        }
      ]
    },
    {
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
=======
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
=======
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
          </p>
        </div>
      </section>
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
                  </div>
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
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/help-center"
                className="inline-flex items-center justify-center px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-colors"
              >
                Visit Help Center
              </a>
            </div>
}
=======
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
        canonical="https://ziontechgroup.com/faq"
      />
=======
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
=======
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
=======
}
=======
