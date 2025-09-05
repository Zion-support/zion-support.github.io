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
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, education, and government. Our solutions are designed to be adaptable to various business needs and requirements.'
        },
        {
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
        },
        {
          question: 'Do you provide quantum computing solutions?',
          answer: 'Yes, we offer quantum computing services including quantum algorithm development, quantum simulation, quantum optimization solutions, and quantum security implementations.'
        },
        {
          question: 'What cybersecurity services are available?',
          answer: 'Our cybersecurity services include threat assessment, security auditing, compliance management, incident response, penetration testing, security architecture design, and ongoing security monitoring.'
        },
        {
          question: 'Do you offer cloud migration services?',
          answer: 'Absolutely. We provide comprehensive cloud migration services including strategy planning, infrastructure assessment, data migration, application modernization, and ongoing cloud management.'
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
}
import React from 'react';
;
const "FAQ": "React.FC = () => {;
  return (;
    <div className="min-h-screen bg-gray-50">;
      <div className="container mx-auto px-4 py-20">;
        <h1 className="text-4xl "md":text-6xl font-bold text-gray-900 mb-6 text-center">;
          FAQ;
        </h1>;
        <p className="text-xl text-gray-600 text-center">Coming soon...</p>;
      </div>;
    </div>;
  );
"};
;
export default FAQ;