import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {};
} from 'lucide-react';
;
export default function Contact() {};
  return null;
}
});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactMethods = [;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const services = [;
    "AI & Machine Learning",;
    "Cloud Solutions",;
    "Cybersecurity",;
    "Digital Transformation",;
    "Software Development",;
    "Consulting",;
    "Other";
  ];
;
  const handleInputChange = (e) => {};
    const { name, value } = e.target;
    setFormData(prev => ({};
}));,
};
;
  const handleSubmit = async (e) => {};
});,
}, 3000);,
};
;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <div>Broken JSX</div>
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-8">;
              <MessageSquare className="w-10 h-10 text-white" />;
            </div>;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>;
            </h1>;
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">;
              Ready to transform your business with cutting-edge technology? Let's discuss your project ;
              and explore how we can help you achieve your goals.;
            </p>;
          </motion.div>;
        </div>;
      </section>;

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Multiple ways to reach us. Choose the method that works best for you.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {};
                <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>;
                <p className="text-blue-400 font-semibold mb-1">{method.value}</p>;
                <p className="text-gray-300 text-sm mb-4">{method.description}</p>;
                {};
                )}
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">;
            {/* Form */}
            <div>Broken JSX</div>
            >;
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>;
              <p className="text-gray-300 mb-8 leading-relaxed">;
                Fill out the form below and we'll get back to you within 24 hours. ;
                We're excited to learn about your project and discuss how we can help.;
              </p>;

              {};
                <form onSubmit={handleSubmit} className="space-y-6">;
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                    <div>;
                      <label htmlFor="firstName" className="block text-white font-medium mb-2">;
                        First Name <span className="text-red-400">*</span>;
                      </label>;
                      <div>Broken JSX</div>
                      />;
                    </div>;
                    <div>;
                      <label htmlFor="lastName" className="block text-white font-medium mb-2">;
                        Last Name <span className="text-red-400">*</span>;
                      </label>;
                      <div>Broken JSX</div>
                      />;
                    </div>;
                  </div>;

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                    <div>;
                      <label htmlFor="email" className="block text-white font-medium mb-2">;
                        Email <span className="text-red-400">*</span>;
                      </label>;
                      <div>Broken JSX</div>
                      />;
                    </div>;
                    <div>;
                      <label htmlFor="phone" className="block text-white font-medium mb-2">;
                        Phone;
                      </label>;
                      <div>Broken JSX</div>
                      />;
                    </div>;
                  </div>;

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                    <div>;
                      <label htmlFor="company" className="block text-white font-medium mb-2">;
                        Company;
                      </label>;
                      <div>Broken JSX</div>
                      />;
                    </div>;
                    <div>;
                      <label htmlFor="service" className="block text-white font-medium mb-2">;
                        Service Interest <span className="text-red-400">*</span>;
                      </label>;
                      <div>Broken JSX</div>
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300">;
                        <option value="">Select a service</option>;
                        {};
                          <option key={service} value={service}>{service}</option>;
                        ))}
                      </select>;
                    </div>;
                  </div>;

                  <div>;
                    <label htmlFor="message" className="block text-white font-medium mb-2">;
                      Message <span className="text-red-400">*</span>;
                    </label>;
                    <div>Broken JSX</div>
                    />;
                  </div>;

                  <div>Broken JSX</div>
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">;
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </button>;
                </form>;
              )}
            </motion.div>;

            {/* Company Info */}
            <div>Broken JSX</div>
              className="space-y-8">;
              <div>;
                <h3 className="text-2xl font-bold text-white mb-4">About Zion Tech Group</h3>;
                <p className="text-gray-300 leading-relaxed mb-6">;
                  We are a leading technology company specializing in AI, cybersecurity, cloud solutions, ;
                  and digital transformation. Our team of experts is dedicated to helping businesses ;
                  leverage cutting-edge technology to achieve their goals.;
                </p>;
                <div className="flex items-center gap-3 text-blue-400">;
                  <Building className="w-5 h-5" />;
                  <span className="font-medium">Established 2022</span>;
                </div>;
              </div>;

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">;
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>;
                <ul className="space-y-3 text-gray-300">;
                  <li className="flex items-center gap-3">;
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />;
                    <span>Expert team with 20+ years combined experience</span>;
                  </li>;
                  <li className="flex items-center gap-3">;
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />;
                    <span>Proven track record of successful projects</span>;
                  </li>;
                  <li className="flex items-center gap-3">;
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />;
                    <span>Cutting-edge technology solutions</span>;
                  </li>;
                  <li className="flex items-center gap-3">;
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />;
                    <span>24/7 support and maintenance</span>;
                  </li>;
                </ul>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
";
      {/* Map Section */}"";
      <section className="py-20 bg-zion-blue-dark/50">"";
        <div className="container-responsive">;
          <div>Broken JSX</div>
            className="text-center mb-16"">"";
            <h2 className="text-4xl font-bold text-white mb-4">;
              Visit Our Office";
            </h2>"";
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Located in the heart of Middletown, Delaware, our office is easily;
              accessible and ready to welcome you for in-person meetings and;
              consultations.;
            </p>;
          </motion.div>";
"";
          <div className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 text-center">"";
            <div className="w-full h-64 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mb-6">"";
              <div className="text-center">"";
                <MapPin className="w-16 h-16 text-zion-cyan mx-auto mb-4" />"";
                <p className="text-zion-slate-light">;
                  Interactive Map Coming Soon;
                </p>;
              </div>";
            </div>"";
            <div className="text-center">"";
              <h3 className="text-xl font-bold text-white mb-2">;
                Zion Tech Group";
              </h3>"";
              <p className="text-zion-cyan">364 E Main St STE 1008</p>"";
              <p className="text-zion-slate-light">Middletown, DE 19709</p>"";
              <p className="text-zion-slate-light text-sm mt-2">;
                United States;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}


export { Contact }
export { Contact }
export { Contact }
export { Contact }