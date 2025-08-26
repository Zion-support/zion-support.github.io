import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Search,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

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
          answer: 'Zion Tech Group is the world\'s first free marketplace dedicated to high-tech and artificial intelligence. We connect talented professionals with innovative companies, providing cutting-edge AI solutions, quantum technology, and innovative IT services.'
        },
        {
          question: 'How do I get started with Zion Tech Group?',
          answer: 'Getting started is easy! Simply browse our services, contact us through our contact form, or call us directly. Our team will work with you to understand your needs and recommend the best solutions for your business.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and more. Our AI and technology solutions are designed to be adaptable across various business sectors.'
        }
      ]
    },
    {
      title: 'Services & Solutions',
      items: [
        {
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, autonomous systems, and custom AI development tailored to your specific business needs.'
        },
        {
          question: 'Do you provide cybersecurity services?',
          answer: 'Yes, we offer enterprise-grade cybersecurity services including threat detection, vulnerability assessments, security audits, compliance management, and 24/7 security monitoring to protect your business assets.'
        },
        {
          question: 'Can you help with cloud migration?',
          answer: 'Absolutely! We provide end-to-end cloud migration services including strategy planning, infrastructure design, migration execution, and ongoing optimization to ensure smooth transitions to cloud platforms.'
        }
      ]
    },
    {
      title: 'Pricing & Billing',
      items: [
        {
          question: 'How do you structure your pricing?',
          answer: 'Our pricing is transparent and project-based. We offer competitive rates for our services and provide detailed quotes upfront. Contact us for a personalized quote based on your specific requirements.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment options including milestone-based payments, monthly installments, and custom payment schedules to accommodate your business cash flow needs.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No hidden fees! We believe in complete transparency. All costs are clearly outlined in our proposals and contracts, so you know exactly what you\'re paying for.'
        }
      ]
    },
    {
      title: 'Support & Maintenance',
      items: [
        {
          question: 'What kind of support do you provide?',
          answer: 'We provide comprehensive support including 24/7 technical assistance, regular maintenance updates, performance monitoring, and dedicated account managers to ensure your systems run smoothly.'
        },
        {
          question: 'How quickly do you respond to support requests?',
          answer: 'We prioritize support requests based on severity. Critical issues are addressed within 1-2 hours, while standard requests are typically resolved within 24 hours. We also offer premium support packages for faster response times.'
        },
        {
          question: 'Do you provide training for our team?',
          answer: 'Yes, we offer comprehensive training programs to help your team understand and effectively use the systems we implement. This includes user training, administrator training, and ongoing support documentation.'
        }
      ]
    },
    {
      title: 'Technical Requirements',
      items: [
        {
          question: 'What are the minimum system requirements?',
          answer: 'System requirements vary depending on the specific solution. We\'ll assess your current infrastructure and recommend any necessary upgrades or modifications to ensure optimal performance.'
        },
        {
          question: 'How long does implementation typically take?',
          answer: 'Implementation timelines vary based on project complexity. Simple solutions can be deployed in weeks, while complex enterprise systems may take several months. We\'ll provide a detailed timeline during project planning.'
        },
        {
          question: 'Do you integrate with existing systems?',
          answer: 'Yes, we specialize in integrating our solutions with your existing systems and workflows. We ensure seamless integration while maintaining data integrity and system performance.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our services, solutions, and how we can help transform your business
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search for questions or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <HelpCircle className="w-6 h-6 text-zion-cyan mr-3" />
                {category.title}
              </h2>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={itemIndex} className="bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zion-cyan/10 transition-colors"
                      >
                        <span className="text-white font-medium pr-4">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-zion-slate-light leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <HelpCircle className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No questions found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or contact us directly for assistance.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our team is here to help! Contact us through any of the channels below and we'll get back to you as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <MessageCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Chat with our support team in real-time
              </p>
              <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg font-medium hover:bg-zion-cyan-light transition-colors">
                Start Chat
              </button>
            </div>
            
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Call us directly for immediate assistance
              </p>
              <a 
                href="tel:+13024640950"
                className="px-4 py-2 bg-zion-cyan text-white rounded-lg font-medium hover:bg-zion-cyan-light transition-colors inline-block"
              >
                Call Now
              </a>
            </div>
            
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <Mail className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Send us a detailed message
              </p>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="px-4 py-2 bg-zion-cyan text-white rounded-lg font-medium hover:bg-zion-cyan-light transition-colors inline-block"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
