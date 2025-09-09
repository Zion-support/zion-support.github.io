import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle, Users, ShoppingCart, Shield, Zap, Globe, Search } from 'lucide-react';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      title: "Getting Started",
      icon: Zap,
      questions: [
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
        },
        {
            question: "What types of services can I find on Zion?",
            answer: "Zion offers a wide range of services including AI development, machine learning consulting, IT services, equipment rentals, green IT solutions, and specialized talent for various technology projects."
        },
        {
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
      ]
    },
    {
      title: "For Talent & Creators",
      icon: Users,
      questions: [
        {
          question: "How do I create a talent profile?",
          answer: "After signing up, navigate to your dashboard and click 'Create Profile'. You can add your skills, experience, portfolio, and set your rates. Make sure to include relevant certifications and examples of your work."
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
        }
      ]
    },
    {
      title: "For Clients & Employers",
      icon: ShoppingCart,
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
      title: "Platform Features",
      icon: Globe,
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
    }
  ];

  // Filter FAQ based on search term
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion's AI and tech marketplace platform, services, and how to get started."
        keywords="FAQ, help, support, Zion marketplace, AI services, tech talent"
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to the most common questions about Zion Tech Group and our marketplace platform
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </div>
          
          {/* FAQ Categories */}
          <div className="space-y-12 mb-16">
            {filteredCategories.map((category, categoryIndex) => (
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
