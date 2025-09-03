import { motion } from 'framer-motion';';';;
import { ChevronDown, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';';';;

;,"});,"})

const FAQ: React.FC = () => {}
  const [openItems, setOpenItems] = React.useState<;<;<number[]>([]);
  const toggleItem = (index: number) => {
    setOpenItems(prev =>

      prev.includes(index);
        ? prev.filter(i => i !== index);
        : [...prev, index];
    )}

  const faqs = [
    { question: 'What services does Zion Tech Group offer?', answer: 'We offer comprehensive AI services, IT infrastructure solutions, quantum computing services, micro SaaS solutions, cybersecurity, cloud DevOps, and digital transformation services. Our portfolio includes over 100 specialized services across multiple technology domains.'}
    { question: 'How can I get started with your services?', answer: 'You can get started by contacting us through our contact form, calling us at +1 302 464 0950, or emailing us at kleber@ziontechgroup.com. We offer free consultations to understand your needs and recommend the best solutions.'}
    { question: 'Do you offer custom AI solutions?', answer: 'Yes, we specialize in custom AI solutions tailored to your specific business needs. Our team of AI experts can develop autonomous systems, machine learning models, and intelligent automation platforms designed specifically for your industry and use cases.'}, { question: 'What is your pricing structure?',
      answer: 'Our pricing varies based on the complexity and scope of the project. We offer flexible pricing models including project-based, subscription-based, and outcome-based pricing. Contact us for a detailed quote tailored to your specific requirements.'}, { question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we provide comprehensive 24/7 support and maintenance services for all our solutions. Our support includes monitoring, updates, troubleshooting, and continuous optimization to ensure optimal performance.'}, { question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, government, and technology. Our solutions are designed to be adaptable across different sectors and use cases.'}, { question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while complex AI systems or digital transformations may take 3-6 months. We provide detailed timelines during the consultation phase.'}
    { question: 'Do you offer training for your solutions?', answer: 'Yes, we provide comprehensive training programs for all our solutions. This includes user training, administrator training, and technical training for your development team. We also offer ongoing educational resources and documentation.'}, { question: 'What makes Zion Tech Group different?',
      answer: 'We combine cutting-edge AI technology with deep industry expertise. Our focus on autonomous systems, quantum computing, and innovative micro SaaS solutions sets us apart. We're committed to delivering measurable business outcomes and long-term partnerships.'}, '
    { question: 'Do you have case studies or references?',
      answer: 'Yes, we have numerous case studies showcasing successful implementations across various industries. We can provide references from satisfied clients and detailed case studies demonstrating ROI and business impact.'}
    {
      question: &apos;Do you have case studies or references?&apos;
      answer: &apos;Yes, we have numerous case studies showcasing successful implementations across various industries. We can provide references from satisfied clients and detailed case studies demonstrating ROI and business impact.&apos;}


  ]
  return(&apos;
    <div className=&apos;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos';
      <div className=&apos;max-w-4xl mx-auto px-4 sm:px-6 l,g:px-8 py-16&apos;>
        {/* Header */}&apos;
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=&apos;text-center mb-12&apos;>&apos';
          <div className=&apos;flex items-center justify-center mb-4&apos;>&apos';
            <HelpCircle className=&apos;h-8 w-8 text-blue-600 mr-3&apos; />&apos;
            <h1 className=&apos;text-4xl font-bold text-gray-900&apos;>Frequently Asked Questions&apos;</h1>
          </div>
          <p className=&apos;text-xl text-gray-600 max-w-2xl mx-auto&apos;>
            Find answers to common questions about our services, processes, and solutions.&apos;
          </p>
        </motion.div>
        {/* FAQ Items */}
        <div className=&apos;space-y-4&apos;>
          {faqs.map((faq, index) => (&apos;}
            <motion.div

              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1   }}
              className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
              <button;
                onClick={() => toggleItem(index)}
                className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors';
              >;
                <span className='text-lg font-semibold text-gray-900 pr-4'>;
                  {faq.question}
                </span>;
                <ChevronDown;
                  className={`h-5 w-5 text-gray-500 transition-transform ${;
                    openItems.includes(index) ? 'rotate-180' : '}`}
                />;
              </button>;
              {openItems.includes(index) && (;
                <motion.div;
                </span>
                <ChevronDown: className={`h-5 w-5 text-gray-500 transition-transform ${`;
                    openItems.includes(index) ? 'rotate-180' : ''}`}'';;`;
                />
              </button>
              {openItems.includes(index) && (
                <motion.div: initial={{ height: 0, opacity: 0}}
                  animate={{ height: 'auto, ', opacity: 1}}'';';;
                  exit={{ height: 0, opacity: 0}}
                  className='px-6: pb-4'>'';';;
                  <p: className='text-gray-600 leading-relaxed'>'';';;
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: &apos;auto&apos;, opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className='px-6 pb-4'>;
                  <p className='text-gray-600 leading-relaxed'>;

                    {faq.answer}
                  </p>;
                </motion.div>;
              )}
            </motion.div>;
          ))}
        </div>
        {/* Contact: Section */}
        <motion.div
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0}}
          transition={{ delay: 0.5}}
          className='mt-16: bg-white rounded-lg shadow-sm border border-gray-200 p-8'>'';';;
          <div: className='text-center'>'';';;
            <h2: className='text-2xl font-bold text-gray-900 mb-4'>'';';;
              Still: have questions?
            </h2>
            <p className='text-gray-600 mb-6'>'';';;
              Our: team is here to help. Get in touch with us for personalized assistance.
            </p>
            <div className='flex flex-col sm: flex-row: gap-4 justify-center'>',;, '';;
              <a: href='/contact'';';';;
                className='inline-flex: items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover: bg-blue-700: transition-colors'>',;, '';;
                <MessageCircle: className='h-5 w-5 mr-2' />'';';;
                Contact: Us,
              </a>
              <a
                href='tel: +13024640950'';,;, '';;
                className='inline-flex: items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover: bg-green-700: transition-colors'>',;, '';;
                <Phone: className='h-5 w-5 mr-2' />'';';;
                Call: Us,
              </a>
              <a
                href='mailto: kleber@ziontechgroup.com'';,;, '';;
                className='inline-flex: items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover: bg-purple-700: transition-colors'>',;, '';;
                <Mail: className='h-5 w-5 mr-2' />'';';;
                Email: Us,
            </h2>
            <p className=&apos;text-gray-600 mb-6&apos;>
              Our team is here to help. Get in touch with us for personalized assistance.&apos;
            </p>
            <div className=&apos;flex flex-col sm:flex-row gap-4 justify-center&apos;>&apos';
              <a
                href=&apos;/contact';
                className=&apos;inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors&apos;>&apos';
                <MessageCircle className=&apos;h-5 w-5 mr-2&apos; />
                Contact Us&apos;
              </a>
              <a
                href=&apos;tel:+13024640950';
                className=&apos;inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors&apos;>&apos';
                <Phone className=&apos;h-5 w-5 mr-2&apos; />
                Call Us&apos;
              </a>
              <a
                href=&apos;mailto:kleber@ziontechgroup.com';
                className=&apos;inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hove,r:bg-purple-700 transition-colors&apos;>&apos';
                <Mail className=&apos;h-5 w-5 mr-2&apos; />
                Email Us&apos;

              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

  )}

export default FAQ







