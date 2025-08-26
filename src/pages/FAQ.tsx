<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Users, 
  ShoppingCart, 
  Shield, 
  Zap, 
  Globe,
  ChevronDown,
  Search,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const faqCategories = [
    {
      title: "Getting Started",
      icon: Zap,
      questions: [
        {
          question: "How do I create an account on Zion?",
          answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner and choose whether you're a client looking for services or talent offering your skills. Fill in your basic information and verify your email to get started."
=======
<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
=======
import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
export default function FAQ() {
    const faqData = [
        {
            question: "What is Zion Tech Group?",
<<<<<<< HEAD
            answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented AI specialists, innovative companies, and cutting-edge technological solutions in one seamless ecosystem."
        },
        {
            question: "How does the marketplace work?",
            answer: "Our marketplace allows businesses to find AI talent, services, and equipment, while professionals can showcase their skills and find opportunities. Users can browse listings, connect directly, and collaborate on projects."
        },
        {
            question: "Is Zion really free to use?",
            answer: "Yes! Zion is completely free to use for both businesses and talent. We believe in democratizing access to AI and technology solutions, so there are no hidden fees or subscription costs."
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
        },
        {
            question: "What types of services can I find on Zion?",
            answer: "Zion offers a wide range of services including AI development, machine learning consulting, IT services, equipment rentals, green IT solutions, and specialized talent for various technology projects."
        },
        {
<<<<<<< HEAD
          question: "Is Zion really free to use?",
          answer: "Yes! Zion is completely free to use. We believe in democratizing access to AI and tech solutions, so there are no subscription fees or hidden costs for using our platform."
        }
      ]
    },
    {
      title: "For Talent & Creators",
      icon: Users,
      questions: [
        {
          question: "How do I create a talent profile?",
          answer: "After signing up, navigate to your dashboard and click 'Create Profile'. You can add your skills, experience, portfolio, and set your rates. Make sure to include relevant certifications and examples of your work."
=======
            question: "How do I get started as a talent provider?",
            answer: "Simply create a profile, showcase your skills and experience, and start connecting with potential clients. You can also browse available projects and submit proposals."
        },
        {
            question: "How do I find the right talent for my project?",
            answer: "Use our AI-powered matching system to find talent based on your specific requirements, or browse through our curated categories and profiles. You can also post job listings to attract qualified candidates."
        },
        {
            question: "What makes Zion different from other platforms?",
            answer: "Zion is specifically focused on AI and high-tech solutions, offers completely free access, provides AI-powered matching, and maintains a strong focus on sustainability and innovation."
        },
        {
            question: "How do you ensure quality on the platform?",
            answer: "We implement a comprehensive verification system, user reviews and ratings, and AI-powered quality assessment to ensure that all users and services meet our high standards."
        },
        {
            question: "Can I use Zion for enterprise projects?",
            answer: "Absolutely! Zion offers enterprise solutions and can handle large-scale projects. Our platform is designed to scale from individual freelancers to enterprise-level collaborations."
        },
        {
            question: "What support is available if I need help?",
            answer: "We provide 24/7 support through our help center, live chat, and dedicated support team. You can also access our comprehensive documentation and community forums."
        },
        {
            question: "How do payments work on the platform?",
            answer: "Zion facilitates secure payments between clients and talent providers. We support various payment methods and ensure secure transactions for all parties involved."
        },
        {
            question: "Is my data secure on Zion?",
            answer: "Yes, we take data security very seriously. We implement enterprise-grade security measures, comply with international data protection standards, and never share your personal information without consent."
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "FAQ - Frequently Asked Questions | Zion Tech Group", description: "Find answers to common questions about Zion Tech Group's AI and technology marketplace platform.", keywords: "FAQ, Zion Tech Group, AI marketplace, tech platform, questions, support", canonical: "https://ziontechgroup.com/faq" }), _jsx(Header, {}), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { children: "Frequently Asked Questions" }), _jsx("p", { className: "mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto", children: "Everything you need to know about Zion Tech Group's AI and technology marketplace" })] }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqData.map((faq, index) => (_jsxs(AccordionItem, { value: `item-${index}`, className: "border-zion-blue-light", children: [_jsx(AccordionTrigger, { className: "text-left text-white hover:text-zion-cyan transition-colors", children: faq.question }), _jsx(AccordionContent, { className: "text-zion-slate-light", children: faq.answer })] }, index))) }) }), _jsx("div", { className: "mt-16 text-center", children: _jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-4", children: "Still have questions?" }), _jsx("p", { className: "text-zion-slate-light mb-6", children: "Can't find what you're looking for? Our support team is here to help." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "mailto:support@ziontechgroup.com", className: "inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-medium rounded-lg transition-all", children: "Contact Support" }), _jsx("a", { href: "/contact", className: "inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-medium rounded-lg transition-all", children: "Visit Contact Page" })] })] }) })] }) }), _jsx(Footer, {})] }));
=======
            answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented professionals with innovative companies, offering a comprehensive platform for AI services, tech talent, and specialized equipment."
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
        },
        {
            question: "How does the marketplace work?",
            answer: "Our marketplace operates as a two-sided platform where businesses can find AI talent, services, and equipment, while professionals can showcase their skills and find opportunities. All basic listings and connections are completely free."
        },
        {
<<<<<<< HEAD
          question: "How do I get hired?",
          answer: "Clients can find you through our search and matching system, or you can proactively apply to job postings. Make sure your profile is complete and showcases your best work to increase your chances of getting hired."
        }
      ]
    },
    {
      title: "For Clients & Businesses",
      icon: ShoppingCart,
      questions: [
        {
          question: "How do I find the right talent for my project?",
          answer: "You can browse our talent directory, use our AI-powered matching system, post job listings, or request quotes for specific projects. Our platform includes detailed profiles, skill assessments, and verified reviews."
        },
        {
          question: "What types of services are available?",
          answer: "We offer a wide range of services including AI development, machine learning consulting, software development, IT consulting, data analysis, cloud services, cybersecurity, and specialized IT onsite services."
        },
        {
          question: "How do payments work?",
          answer: "We provide secure payment processing with milestone-based payment systems. You can set up payment schedules, use escrow services for protection, and choose from various payment methods including credit cards and bank transfers."
        }
      ]
    },
    {
      title: "Security & Trust",
      icon: Shield,
      questions: [
        {
          question: "How do you ensure quality and reliability?",
          answer: "We implement a comprehensive verification system including profile verification, skill assessments, client reviews, and dispute resolution processes. Our community-driven approach helps maintain high standards across the platform."
        },
        {
          question: "What happens if there's a dispute?",
          answer: "We have a built-in dispute resolution system. If issues arise, our support team will mediate and help find a fair solution. We also provide project protection and escrow services for added security."
        },
        {
          question: "Is my data secure?",
          answer: "Yes, we use enterprise-grade security measures including encryption, secure servers, and regular security audits. Your personal and business information is protected and never shared with third parties without your consent."
        }
      ]
    },
    {
      title: "Platform Features",
      icon: Globe,
      questions: [
        {
          question: "What makes Zion different from other platforms?",
          answer: "Zion is specifically designed for AI and high-tech industries, offering specialized tools, AI-powered matching, comprehensive equipment listings, and a focus on sustainable technology. Our free model makes advanced tech accessible to businesses of all sizes."
        },
        {
          question: "Do you offer AI-powered matching?",
          answer: "Yes! Our AI matching system analyzes project requirements and talent profiles to suggest the best matches. This saves time and helps ensure successful project outcomes."
        },
        {
          question: "Can I list equipment and hardware?",
          answer: "Absolutely! Our marketplace includes specialized AI hardware, servers, networking equipment, development tools, and other tech equipment. We also feature Green IT solutions for sustainable technology practices."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              Find answers to common questions about Zion Tech Group's marketplace, 
              services, and how to get started with AI and technology solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-zion-blue-light/10 rounded-lg border border-zion-blue-light/20 overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zion-blue-light/20 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-zion-cyan transition-transform ${
                      expandedCategory === category.title ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {expandedCategory === category.title && (
                  <div className="px-6 pb-4 border-t border-zion-blue-light/20">
                    <div className="space-y-4 pt-4">
                      {category.questions.map((item, questionIndex) => (
                        <div key={questionIndex} className="bg-zion-blue-light/5 rounded-lg p-4">
                          <h3 className="text-lg font-medium text-white mb-2">{item.question}</h3>
                          <p className="text-zion-slate-light leading-relaxed">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help 
            you get the answers you need.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-zion-slate-light text-sm mb-4">Get instant help from our AI assistant</p>
              <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                Start Chat
              </button>
            </div>
            
            <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
              <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-zion-purple" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-zion-slate-light text-sm mb-4">Send us a detailed message</p>
              <a 
                href="mailto:support@ziontechgroup.com" 
                className="text-zion-purple hover:text-zion-purple-light transition-colors text-sm"
              >
                support@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
              <div className="w-12 h-12 bg-zion-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-zion-green" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-zion-slate-light text-sm mb-4">Call us for urgent assistance</p>
              <a 
                href="tel:+15551234567" 
                className="text-zion-green hover:text-zion-green-light transition-colors text-sm"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join thousands of professionals and businesses already using Zion Tech Group 
            to connect, collaborate, and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
            >
              Contact Support
            </Link>
            <Link
              to="/"
              className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
            >
              Explore Marketplace
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
=======
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
        }
    ];
    return (<>
      <SEO title="FAQ - Frequently Asked Questions" description="Find answers to common questions about Zion Tech Group's AI and tech marketplace platform." keywords="FAQ, Zion Tech Group, AI marketplace, tech platform, questions, support" canonical="https://ziontechgroup.com/faq"/>
      <Header />
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
              {faqData.map((item, index) => (<AccordionItem key={index} value={`item-${index}`} className="border-zion-blue-light">
                  <AccordionTrigger className="text-left text-white hover:text-zion-cyan px-6 py-4">
                    <span className="text-lg font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-zion-slate-light leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>))}
            </Accordion>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
              <p className="text-zion-slate-light mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple hover:bg-zion-purple-dark text-white font-medium rounded-lg transition-colors">
                  Contact Support
                </a>
                <a href="/help" className="inline-flex items-center justify-center px-6 py-3 border border-zion-blue-light hover:border-zion-purple text-white font-medium rounded-lg transition-colors">
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
}
