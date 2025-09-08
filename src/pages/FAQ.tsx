

const FAQ: React.FC = () => {}
  const [openItems, setOpenItems] = React.useState<;<;<number[]>([]);
  const toggleItem = (index: number) => {
    setOpenItems(prev =>

      prev.includes(index);
        ? prev.filter(i => i !== index);
        : [...prev, index];
    )}, {
      question: &apos;Do you have case studies or references?&apos;,
      answer: &apos;Yes, we have numerous case studies showcasing successful implementations across various industries. We can provide references from satisfied clients and detailed case studies demonstrating ROI and business impact.&apos}


  ]

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=&apos;text-center mb-12&apos;>&apos;

          <div className=&apos;flex items-center justify-center mb-4&apos;>&apos;
            <HelpCircle className=&apos;h-8 w-8 text-blue-600 mr-3&apos; />&apos;
            <h1 className=&apos;text-4xl font-bold text-gray-900&apos;>Frequently Asked Questions&apos;</h1>
          </div>
          <p className=&apos;text-xl text-gray-600 max-w-2xl mx-auto&apos;>
            Find answers to common questions about our services, processes, and solutions.&apos;
          </p>
        </motion.div>
        {/* FAQ Items */}
        <div className=&apos;space-y-4&apos;>
          {faqs.map((faq, index) => (&apos}
            <motion.div

              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

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

                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: &apos;auto&apos;, opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}

              )}
            </motion.div>;
          ))}

            </h2>
            <p className=&apos;text-gray-600 mb-6&apos;>
              Our team is here to help. Get in touch with us for personalized assistance.&apos;
            </p>
            <div className=&apos;flex flex-col sm:flex-row gap-4 justify-center&apos;>&apos;'
              <a


              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

  )}








