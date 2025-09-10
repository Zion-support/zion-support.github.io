<<<<<<< HEAD
:src/pages/FAQ.tsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };
  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology company specializing in AI solutions, quantum computing, cybersecurity, and digital transformation services. We help businesses leverage cutting-edge technology to drive innovation and growth.'
=======
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
>>>>>>> origin/backup-improvements-20250827-015311
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, education, and government. Our solutions are designed to be adaptable to various business needs and requirements.'
        },
        {
<<<<<<< HEAD
          question: 'How long has Zion Tech Group been in business?',
          answer: 'Zion Tech Group has been at the forefront of technology innovation for over a decade, helping businesses transform their operations and achieve their digital goals.'
        },
        {
          question: 'Where is your company located?',
          answer: 'Our headquarters is located at 123 Tech Street, Innovation City, IC 12345. We also have remote teams and satellite offices to serve our global client base.'
        }
      ]
    },
    {
      category: 'Services',
      questions: [
        {
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including machine learning model development, natural language processing, computer vision, predictive analytics, AI strategy consulting, and custom AI solution development.'
=======
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
>>>>>>> origin/backup-improvements-20250827-015311
        },
        {
          question: 'Do you provide quantum computing solutions?',
          answer: 'Yes, we offer quantum computing services including quantum algorithm development, quantum simulation, quantum optimization solutions, and quantum security implementations.'
        },
        {
<<<<<<< HEAD
          question: 'What cybersecurity services are available?',
          answer: 'Our cybersecurity services include threat assessment, security auditing, compliance management, incident response, penetration testing, security architecture design, and ongoing security monitoring.'
        },
        {
          question: 'Do you offer cloud migration services?',
          answer: 'Absolutely. We provide comprehensive cloud migration services including strategy planning, infrastructure assessment, data migration, application modernization, and ongoing cloud management.'
=======
<<<<<<< HEAD
          question: "How do I get hired?",
          answer: "Clients can find you through our search and matching system, or you can proactively apply to job postings. Make sure your profile is complete and showcases your best work to increase your chances of getting hired."
>>>>>>> origin/backup-improvements-20250827-015311
        }
      ]
    },
    {
      category: 'Pricing & Billing',
      questions: [
        {
          question: 'What is your pricing model?',
          answer: 'We offer flexible pricing models including project-based pricing, retainer agreements, and subscription-based services. Pricing depends on the scope, complexity, and duration of the project.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, we provide free initial consultations to understand your needs and provide recommendations. This helps us create a tailored proposal for your specific requirements.'
        },
        {
          question: 'Are there any hidden costs?',
          answer: 'No, we believe in transparent pricing. All costs are clearly outlined in our proposals, and we provide detailed breakdowns of all expenses before starting any project.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects. We can work with you to create a payment schedule that fits your budget and project timeline.'
        }
      ]
    },
    {
      category: 'Support & Maintenance',
      questions: [
        {
          question: 'What kind of support do you provide?',
          answer: 'We provide comprehensive support including 24/7 technical support, regular maintenance, updates, monitoring, and troubleshooting. Our support team is always available to help resolve any issues.'
        },
        {
          question: 'Do you provide training for our team?',
          answer: 'Yes, we include training as part of our service delivery. We provide comprehensive training for your team to ensure they can effectively use and maintain the solutions we implement.'
        },
        {
          question: 'How quickly do you respond to support requests?',
          answer: 'We have different response times based on the severity of the issue. Critical issues are addressed within 1 hour, while standard requests are handled within 24 hours.'
        },
        {
          question: 'Do you offer ongoing maintenance contracts?',
          answer: 'Yes, we offer various maintenance contract options to ensure your systems remain up-to-date, secure, and performing optimally. These contracts can be customized based on your needs.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What technologies do you work with?',
          answer: 'We work with a wide range of technologies including Python, JavaScript, React, Node.js, AWS, Azure, Google Cloud, Docker, Kubernetes, TensorFlow, PyTorch, and many more cutting-edge technologies.'
        },
        {
          question: 'Do you work with existing systems?',
          answer: 'Yes, we specialize in integrating new solutions with existing systems. We can work with your current infrastructure and ensure seamless integration without disrupting your operations.'
        },
        {
          question: 'How do you ensure data security?',
          answer: 'We implement multiple layers of security including encryption, access controls, regular security audits, compliance with industry standards, and following best practices for data protection.'
        },
        {
          question: 'What is your development methodology?',
          answer: 'We use agile development methodologies with regular sprints, continuous integration, and frequent client feedback. This ensures transparency and allows for adjustments throughout the development process.'
        }
      ]
    }
  ];
  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services, pricing, 
              and how we can help transform your business.
            </p>
<<<<<<< HEAD
=======
            
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
>>>>>>> origin/backup-improvements-20250827-015311
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        {/* FAQ Categories */}
        {filteredData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <HelpCircle className="w-6 h-6 mr-3 text-blue-400" />
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((item, itemIndex) => {
                const globalIndex = categoryIndex * 100 + itemIndex;
                const isOpen = openItems.includes(globalIndex);
                return (
                  <div key={itemIndex} className="bg-gray-800/50 rounded-xl border border-gray-700">
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                    >
                      <span className="font-semibold text-lg">{item.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-gray-400 mb-6">
              Try searching with different keywords or browse our categories above.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Clear search
            </button>
          </div>
        )}
        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-blue-100 mb-6">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
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
>>>>>>> origin/backup-improvements-20250827-015311
