import React, { useState } from 'react';
import { ChevronDown, ChevronUp  } from 'lucide-react';
const FaqSection: React.FC = () => {const [openIndex, setOpenIndex]  = useState<number | null />(null)const faqs = [;
    {question: 'What services does Zion Tech offer?',}
  answer: 'We offer comprehensive AI solutions, IT services, cloud migration, cybersecurity, data analytics, and digital transformation services to help businesses modernize and grow.';}
    },{question: 'How long does implementation take?',}
  answer: 'Implementation timelines vary based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during consultation.';}
    },{question: 'Do you provide ongoing support?',}
  answer: 'Yes, we offer 24/7 support for all our services. Our support includes monitoring, maintenance, updates, and technical assistance to ensure optimal performance.';}
    },{question: 'What makes Zion Tech different?',}
  answer: 'We combine cutting-edge AI technology with deep industry expertise, offer personalized solutions, provide comprehensive support, and maintain a track record of successful implementations across various industries.';}
    },{question: 'Do you work with small businesses?',}
  answer: 'Absolutely! We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be tailored to fit any budget and requirement.';}
    },{question: 'How do you ensure data security?',}
  answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, compliance with industry standards, and continuous monitoring to protect your data.';}
    },{question: 'What industries do you serve?',}
  answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and government. Our solutions are tailored to meet the specific compliance and security requirements of each industry.';}
    },{question: 'Can you work with our existing systems?',}
  answer: 'Absolutely! We specialize in integrating with existing systems and can work with virtually any technology stack. Our team will assess your current infrastructure and create a seamless integration plan.';}
    },{question: 'What is your pricing model?',}
  answer: 'We offer flexible pricing models including project-based, retainer, and subscription options. Pricing depends on the scope of work, timeline, and specific requirements. We provide detailed quotes after understanding your needs.';}
    },{question: 'Do you offer training for our team?',}
  answer: 'Yes, we provide comprehensive training programs for your team to ensure they can effectively use and maintain the solutions we implement. Training includes documentation, hands-on sessions, and ongoing support.';}
    }
  ];const toggleFaq = (setOpenIndex(openIndex === index ? null : index)) => {
  return $3;}
}return (<section className=\"py-16 px-4 bg-gray-50\" />;
      <div className=\"container mx-auto max-w-4xl\" />;
        <div className=\"text-center mb-12\" />;
          <h2 className=\"text-4xl font-bold mb-4\" />Frequently Asked Questions</h2>;
          <p className=\"text-xl text-gray-600 max-w-2xl mx-auto\" />;
            Find answers to common questions about our services and solutions.;
          </p>;
        </div>;
        <div className=\"space-y-4\" />;
          {faqs.map((faq, index) => (<div;}
              key={index}
              className=\"bg-white rounded-lg shadow-md overflow-hidden\";
             />;
              <button;
                onClick={() = /> toggleFaq(index)}
                className=\"w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors\";
              >;
                <h3 className=\"text-lg font-semibold text-gray-900 pr-4\" />;
                  {faq.question}
                </h3>;
                {openIndex === index ? (<ChevronUp className=\"w-5 h-5 text-blue-600 flex-shrink-0\" />;}
                ) : (<ChevronDown className=\"w-5 h-5 text-gray-400 flex-shrink-0\" />;}
                )}
              </button>;
              {openIndex === index && (<div className=\"px-6 pb-4\" />;}
                  <p className=\"text-gray-600 leading-relaxed\" />;}
                    {faq.answer}
                  </p>;
                </div>;
              )}
            </div>;
          ))}
        </div>;
        <div className=\"mt-12 text-center\" />;
          <p className=\"text-gray-600 mb-4\" />;
            Still have questions? We&apos;re here to help!;
          </p>;
          <button className=\"bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors\" />;
            Contact Us;
          </button>;
        </div>;
      </div>;
    </section>;
  )}export default FaqSection;