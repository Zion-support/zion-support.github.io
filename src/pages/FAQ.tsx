import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'General Questions',
      items: [
        {
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology company that specializes in AI solutions, cybersecurity, cloud computing, and digital transformation. We help businesses leverage cutting-edge technology to achieve their goals and stay competitive in the digital age.'
        },
        {
          question: 'Where is Zion Tech Group located?',
          answer: 'We are headquartered in Delaware, United States, but we serve clients globally. Our team works remotely and we have presence in multiple locations to better serve our international clients.'
        },
        {
          question: 'How long has Zion Tech Group been in business?',
          answer: 'Zion Tech Group has been at the forefront of technology innovation for several years, helping businesses transform and adapt to the rapidly evolving digital landscape.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and government. Our solutions are adaptable to any industry that can benefit from digital transformation.'
        }
      ]
    },
    {
      title: 'Services & Solutions',
      items: [
        {
          question: 'What AI services do you offer?',
          answer: 'Our AI services include machine learning model development, natural language processing, computer vision, predictive analytics, AI strategy consulting, and custom AI solution development tailored to your specific business needs.'
        },
        {
          question: 'Do you provide cybersecurity services?',
          answer: 'Yes, we offer comprehensive cybersecurity services including security assessments, penetration testing, vulnerability management, security architecture design, compliance consulting (SOC2, ISO 27001), and incident response planning.'
        },
        {
          question: 'What cloud services do you support?',
          answer: 'We work with all major cloud platforms including AWS, Azure, and Google Cloud. Our services include cloud migration, architecture design, DevOps implementation, cost optimization, and multi-cloud strategies.'
        },
        {
          question: 'Do you offer consulting services?',
          answer: 'Absolutely! We provide strategic consulting in digital transformation, technology roadmapping, process optimization, and technology selection. Our consultants help you make informed decisions about your technology investments.'
        }
      ]
    },
    {
      title: 'Pricing & Billing',
      items: [
        {
          question: 'How do you price your services?',
          answer: 'Our pricing varies based on the scope and complexity of the project. We offer flexible pricing models including project-based pricing, retainer agreements, and subscription models. Contact us for a customized quote based on your specific needs.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, we offer a free initial consultation to understand your needs and discuss how we can help. This helps us provide you with the most accurate and relevant proposal for your project.'
        },
        {
          question: 'What payment terms do you offer?',
          answer: 'We typically require a deposit to begin work, with milestone payments throughout the project and final payment upon completion. For ongoing services, we offer monthly or quarterly billing options.'
        },
        {
          question: 'Do you provide detailed project estimates?',
          answer: 'Yes, we provide detailed project estimates including timelines, deliverables, and costs. We believe in transparency and want you to have a clear understanding of what to expect.'
        }
      ]
    },
    {
      title: 'Project & Delivery',
      items: [
        {
          question: 'How long do typical projects take?',
          answer: 'Project timelines vary significantly based on complexity. Small projects might take 2-4 weeks, while large enterprise transformations can take 6-18 months. We\'ll provide a detailed timeline during our initial consultation.'
        },
        {
          question: 'What is your project management approach?',
          answer: 'We use agile methodologies with regular check-ins, milestone reviews, and transparent communication. You\'ll have a dedicated project manager and regular status updates throughout the project lifecycle.'
        },
        {
          question: 'Do you provide ongoing support after project completion?',
          answer: 'Yes, we offer various support options including maintenance contracts, 24/7 monitoring, help desk support, and ongoing optimization services. We\'re committed to your long-term success.'
        },
        {
          question: 'How do you handle project changes or scope creep?',
          answer: 'We have a formal change management process. Any changes to project scope are documented, evaluated for impact on timeline and budget, and require your approval before implementation.'
        }
      ]
    },
    {
      title: 'Technical & Security',
      items: [
        {
          question: 'What security measures do you implement?',
          answer: 'We follow industry best practices including encryption, secure development practices, regular security audits, and compliance with security standards. We\'re SOC2 compliant and can help you achieve similar compliance.'
        },
        {
          question: 'Do you work with existing systems and infrastructure?',
          answer: 'Yes, we specialize in integrating with existing systems and infrastructure. We assess your current setup and design solutions that work seamlessly with what you already have while preparing for future growth.'
        },
        {
          question: 'What technologies and platforms do you specialize in?',
          answer: 'We work with a wide range of technologies including Python, Java, .NET, React, Angular, AWS, Azure, Kubernetes, Docker, and many more. We choose the best technology stack for your specific needs.'
        },
        {
          question: 'How do you ensure data privacy and compliance?',
          answer: 'We implement strict data privacy controls, comply with GDPR, CCPA, and other relevant regulations, and can help you achieve compliance with industry-specific standards like HIPAA, PCI-DSS, and SOX.'
        }
      ]
    },
    {
      title: 'Client Support & Communication',
      items: [
        {
          question: 'How do you communicate with clients during projects?',
          answer: 'We use multiple communication channels including regular video calls, project management tools, email updates, and a client portal. You\'ll have direct access to your project team and regular status reports.'
        },
        {
          question: 'What kind of training and documentation do you provide?',
          answer: 'We provide comprehensive training for your team, detailed documentation, user manuals, and ongoing support. We want you to be confident and self-sufficient with your new systems.'
        },
        {
          question: 'How do you handle support requests?',
          answer: 'We have a tiered support system with different response times based on priority. Critical issues get immediate attention, while general questions are typically resolved within 24 hours.'
        },
        {
          question: 'Do you offer 24/7 support?',
          answer: 'Yes, we offer 24/7 support for critical systems and infrastructure. This includes monitoring, alerting, and emergency response to ensure your systems are always available.'
        }
      ]
    }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group</title>
        <meta name="description" content="Find answers to frequently asked questions about Zion Tech Group's services, pricing, and processes. Get the information you need to make informed decisions." />
        <meta name="keywords" content="FAQ, frequently asked questions, Zion Tech Group, services, pricing, support" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Find answers to common questions about our services, processes, and company. 
                Can't find what you're looking for? Contact us directly.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.title}</h2>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={itemIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                          {isOpen ? (
                            <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronRightIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="border-t border-gray-200 pt-4">
                              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-20 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Can't find the answer you're looking for? Our team is here to help. 
                Reach out to us and we'll get back to you as soon as possible.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Contact Us
                </a>
                <a 
                  href="mailto:support@ziontechgroup.com" 
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Email Support
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  <strong>Quick Contact:</strong>
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-600">
                  <div>
                    <strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">+1 (302) 464-0950</a>
                  </div>
                  <div>
                    <strong>Email:</strong> <a href="mailto:info@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">info@ziontechgroup.com</a>
                  </div>
                  <div>
                    <strong>Support:</strong> <a href="mailto:support@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">support@ziontechgroup.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;