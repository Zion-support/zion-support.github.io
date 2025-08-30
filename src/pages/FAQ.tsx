import React, { useState } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { SEO  } from '@/components/SEO';
import { ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  Shield,
  Users,
  Award,
  Globe,
  Lightbulb
 } from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<any>([]);

  const toggleItem = (index: number) => {;
    setOpenItems(prev => ;
      prev.includes(index) ;
        ? prev.filter(i => i !== index);
        : [...prev, index];
    );
  };

  const faqCategories = [
    {
      name: 'General Questions',
      icon: HelpCircle,
      questions: [
        {
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology comp specializing in AI-powered solutions, cloud services, cybersecurity, and digital transformation. We help businesses leverage cutting-edge technology to drive innovation and growth.'
        },
        {
          question: 'Where is Zion Tech Group located?',
          answer: 'Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709. We serve clients globally with operations in 25+ countries.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, and government sectors. Our solutions are adaptable to  industry that can benefit from AI and digital transformation.'
        },
        {
          question: 'How long has Zion Tech Group been in business?',
          answer: 'Zion Tech Group was founded in 2018 and has been delivering innovative technology solutions for over 5 years. We have successfully completed 500+ projects and serve 100+ enterprise clients.'
        }
      ]
    },
    {
      name: 'AI & Technology Services',
      icon: Zap,
      questions: [
        {
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including AI Business Intelligence, AI Sales Copilot, AI Compliance Assistant, LLM Content Studio, and custom AI solutions. Our AI services help automate processes, gain insights, and transform business operations.'
        },
        {
          question: 'How do you ensure AI solutions are ethical and secure?',
          answer: 'We follow strict AI ethics guidelines and implement enterprise-grade security measures. All our AI solutions include bias detection, explainability features, and comply with industry standards and regulations.'
        },
        {
          question: 'Can you customize AI solutions for our specific needs?',
          answer: 'Absolutely! We specialize in custom AI solutions tailored to your specific business requirements. Our team works closely with you to understand your needs and develop solutions that deliver measurable results.'
        },
        {
          question: 'What is the typical timeline for AI project implementation?',
          answer: 'AI project timelines vary based on complexity and scope. Simple AI integrations can take 4-8 weeks, while complex enterprise AI solutions may take 3-6 months. We provide detailed project timelines during the planning phase.'
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Shield,
      questions: [
        {
          question: 'What cloud platforms do you support?',
          answer: 'We support all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud environments. Our team has certifications in multiple cloud platforms and can help you choose the best solution for your needs.'
        },
        {
          question: 'How do you ensure cloud security?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, monitoring, and compliance frameworks. Our cloud solutions are ISO 27001 certified and SOC 2 Type II compliant.'
        },
        {
          question: 'What DevOps practices do you implement?',
          answer: 'We implement modern DevOps practices including CI/CD pipelines, Infrastructure as Code, automated testing, monitoring, and continuous deployment. This ensures faster delivery and higher quality software.'
        },
        {
          question: 'Can you help optimize our cloud costs?',
          answer: 'Yes! Our Cloud FinOps Optimizer service helps analyze cloud spending, identify optimization opportunities, and implement cost-saving measures. We typically help clients reduce cloud costs by 20-40%.'
        }
      ]
    },
    {
      name: 'Pricing & Billing',
      icon: Award,
      questions: [
        {
          question: 'How do you price your services?',
          answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and subscription-based services. Pricing depends on project scope, complexity, and requirements. Contact us for a custom quote.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects. We can structure payments based on project milestones or provide monthly payment options. We also offer enterprise payment terms for ongoing services.'
        },
        {
          question: 'What is included in your service packages?',
          answer: 'Our service packages include project planning, development, testing, deployment, training, and ongoing support. We also provide documentation, user guides, and maintenance services as part of our comprehensive packages.'
        },
        {
          question: 'Are there  hidden costs?',
          answer: 'No hidden costs! We provide transparent pricing with detailed breakdowns of all services and costs. Any additional requirements or changes are discussed upfront and clearly communicated before implementation.'
        }
      ]
    },
    {
      name: 'Support & Maintenance',
      icon: Users,
      questions: [
        {
          question: 'What support do you provide after project completion?',
          answer: 'We provide comprehensive post-project support including bug fixes, updates, maintenance, and 24/7 emergency support for critical systems. Our support packages are customizable to meet your specific needs.'
        },
        {
          question: 'How quickly do you respond to support requests?',
          answer: 'We provide different response time SLAs based on issue priority. Critical issues receive immediate attention, while standard requests are typically resolved within 4-8 hours. Emergency support is available 24/7.'
        },
        {
<<<<<<< HEAD
          question: 'Do you provide training for our team?',
          answer: 'Yes! We provide comprehensive training for your team on all implemented solutions. This includes user training, administrator training, and ongoing education as new features are added.'
        },
        {
          question: 'Can you help with system upgrades and migrations?',
          answer: 'Absolutely! We provide migration services, system upgrades, and technology refresh services. Our team ensures smooth transitions with minimal downtime and comprehensive testing.'
        }
      ]
    },
    {
      name: 'Security & Compliance',
      icon: Shield,
      questions: [
        {
          question: 'What security certifications do you have?',
          answer: 'We are ISO 27001 certified and SOC 2 Type II compliant. We also maintain certifications in various cloud platforms and security frameworks. Our security practices meet or exceed industry standards.'
        },
        {
          question: 'How do you protect client data?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance monitoring. All client data is protected with industry-standard security protocols.'
        },
        {
          question: 'Do you comply with industry regulations?',
          answer: 'Yes, we comply with major industry regulations including GDPR, HIPAA, SOX, and industry-specific requirements. We can help ensure your solutions meet all applicable compliance standards.'
        },
        {
          question: 'What happens in case of a security incident?',
          answer: 'We have comprehensive incident response procedures including immediate notification, containment, investigation, and resolution. We provide detailed incident reports and work to prevent future occurrences.'
        }
      ];
    };
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q  =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
=======;
          question: "Do you comply with industry regulations?",;
          answer: "Yes, we maintain compliance with various industry regulations including SOC2, GDPR, HIPAA, and others. We can help you achieve and maintain compliance for your specific industry requirements.";
        };
      ];
    };
  ];

  const filteredFAQ = faqData.map(category => ({;
    ...category,;
    questions: category.questions.filter(q => ;
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      q.answer.toLowerCase().includes(searchQuery.toLowerCase());
    );
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  })).filter(category => category.questions.length > 0);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 302 464 0950',
      description: 'Speak directly with our experts',
      action: 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500'
    },
    {
<<<<<<< HEAD
      icon: Mail,
      title: 'Email Us',
      value: 'kleber@ziontechgroup.com',
      description: 'Send us a detailed message',
      action: 'mailto:kleber@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Our headquarters location',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      description: '24/7 emergency support available',
      action: null,
      color: 'from-orange-500 to-red-500';
    };
  ];

  return (
    <div className = "min-h-screen bg-slate-900">
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Find answers to frequently asked questions about Zion Tech Group's AI services, cloud solutions, cybersecurity, and digital transformation services."
        keywords="FAQ, frequently asked questions, Zion Tech Group, AI services, cloud solutions, support"
        canonical="https://ziontechgroup.com/faq"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial = {
  { opacity: 0,
  y: 30 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial = {
  { opacity: 0,
  y: 30 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition = {
  { duration: 0.8,
  delay: 0.2 

}}
          >
            Find answers to common questions about our services, pricing, and how we can help transform your business
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial = {
  { opacity: 0,
  y: 30 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition = {
  { duration: 0.8,
  delay: 0.4 

}}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for questions or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/70 border border-slate-600 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-white placeholder-slate-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial = {
  { opacity: 0,
  y: 30 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: categoryIndex * 0.1 

}}
              >
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{category.name}</h2>
                </div>
                
                <div className="max-w-4xl mx-auto space-y-4">;
                  {category.questions.map((item, index) => {;
                    const globalIndex = categoryIndex * 100 + index;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <motion.div
                        key = {index}
                        initial = {
  { opacity: 0,
  y: 20 

}}
                        whileInView = {
  { opacity: 1,
  y: 0 

}}
                        viewport={{ once: true }}
                        transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors duration-200"
=======;
      icon: MessageCircle,;
      title: "Live Chat",;
      description: "Chat with our team",;
      contact: "Available on website",;
      response: "Real-time support";
    };
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name = "description" content="Find answers to common questions about Zion Tech Group's services, pricing, support, and technology solutions." />
        <meta name="keywords" content="FAQ, frequently asked questions, Zion Tech Group, support, help, technology services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Find answers to common questions about our services, pricing, and support. Can't find what you're looking for? Contact our team directly.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for questions or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.2 






}}
            >
              {filteredFAQ.map((category, categoryIndex) => (
                <div key={category.category} className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    {category.category === "General" && <Users className="w-6 h-6 text-blue-600" />}
                    {category.category === "Services" && <Zap className="w-6 h-6 text-blue-600" />}
                    {category.category === "Pricing & Billing" && <CheckCircle className="w-6 h-6 text-blue-600" />}
                    {category.category === "Support & Maintenance" && <Clock className="w-6 h-6 text-blue-600" />};
                    {category.category === "Technology & Security" && <Shield className="w-6 h-6 text-blue-600" />};
                    {category.category};
                  </h2>;
                  ;
                  <div className="space-y-4">;
                    {category.questions.map((item, questionIndex) => {;
                      const isOpen = openItems.includes(index);
                      
                      return (
                        <motion.div
                          key = {index}
                          initial = {
  { opacity: 0,
  y: 20 






}}
                          animate = {
  { opacity: 1,
  y: 0 






}}
                          transition = {
  { duration: 0.6,
  delay: 0.1 * index 






}}
                          className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                        >
                          <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
<<<<<<< HEAD
                              initial = {
  { height: 0,
  opacity: 0 

}}
                              animate = {
  { height: 'auto',
  opacity: 1 

}}
                              exit = {
  { height: 0,
  opacity: 0 

}}
=======
                              initial = {
  { opacity: 0,
  height: 0 






}}
                              animate = {
  { opacity: 1,
  height: "auto" 






}}
                              exit = {
  { opacity: 0,
  height: 0 






}}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
<<<<<<< HEAD
                              <div className="px-6 pb-6">
                                <p className="text-slate-300 leading-relaxed">{item.answer}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )})}
=======;
                              <p className="text-slate-600 leading-relaxed">;
                                {item.answer};
                              </p>;
                            </motion.div>;
                          )};
                        </motion.div>;
                      );
                    })}
                  </div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Information */}
      <section className = "py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Still Have Questions?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our team is here to help. Get in touch with us through  of these channels.
            </p>
          </motion.div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index)  => (
              <motion.div
                key={contact.title}
                initial = {
  { opacity: 0,
  y: 30 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 

}}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{contact.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm">{contact.description}</p>
                  {contact.action ? (
                    <a 
                      href={contact.action}
                      target={contact.action.startsWith('http') ? '_blank' : null}
                      rel={contact.action.startsWith('http') ? 'noopener noreferrer' : null}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:scale-105 transition-all duration-300"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-cyan-400 font-semibold">{contact.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition = {
  { duration: 0.8,
  delay: 0.2 

}}
          >
            Let's discuss how our AI-powered solutions can transform your business operations
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition = {
  { duration: 0.8,
  delay: 0.4 

}}
          >
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Call Us Now
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Send Email
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )}
=======
        {/* Contact Support Section */}
        <section className = "py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.4 






}}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Still Need Help?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial = {
  { opacity: 0,
  y: 20 






}}
                    animate = {
  { opacity: 1,
  y: 0 






}}
                    transition = {
  { duration: 0.6,
  delay: 0.1 * index 






}}
                    className="text-center p-6 bg-slate-50 rounded-xl"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{method.title}</h3>
                    <p className="text-slate-600 mb-3">{method.description}</p>
                    <p className="font-medium text-slate-900 mb-2">{method.contact}</p>
                    <p className="text-sm text-slate-500">{method.response}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.6 






}}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact our team to discuss your project requirements and get a personalized solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Contact Sales
                </button>
                <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule Consultation
                </button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
};

export default FAQ;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
