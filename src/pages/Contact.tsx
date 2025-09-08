

export default Contact;

  const [submitSuccess, setSubmitSuccess] = useState(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
    const;const;const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value}))}

;
  const handleSubmit = async (e: React.FormEvent) => {;

    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);

        email: '', company: '',
        phone: '', service: '',
        message: ''})}, 5000)}
;
  const services = [
    'AI & Machine Learning', 'Cloud & DevOps',
    'Cybersecurity', 'Digital Transformation',
    'Financial Solutions', 'Manufacturing Solutions',
    'Other'];
  const contactMethods = [
    { icon: '📍', title: 'Office Address',
      details: '364 E Main St STE 1008, Middletown DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'}, { icon: '📧',
      title: 'Email', details: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com'}, { icon: '📱',
      title: 'Phone', details: '+1 (302) 464-0950', link: 'tel:+13024640950'}, { icon: '🌐', title: 'Website',
      details: 'ziontechgroup.com', link: 'https://ziontechgroup.com'}


  const officeHours = [
    { day: &apos;Monday - Friday&apos;, hours: &apos;9:00 AM - ,6:00 PM EST&apos}, { day: &apos;Saturday&apos;, hours: &apos;10:00 AM - ,4:00 PM EST&apos}, { day: &apos;Sunday&apos;, hours: &apos;Closed&apos}
  ]
  return(&apos;
    <div className=&apos;min-h-screen bg-white&apos;>&apos;

      <Header />
      {/* Hero Section */}

              can drive innovation and growth for your organization.

            </p>
          </div>
        </div>
      </section>

          <div>
            <h2 className=&apos;text-3xl font-bold text-gray-900 mb-8&apos;>Send us a Message&apos;</h2>
            {submitSuccess ? (}
              <div className=&apos;bg-green-50 border border-green-200 rounded-lg p-6 mb-8&apos;>&apos;
                <div className=&apos;flex items-center&apos;>&apos;

                  <svg className=&apos;w-6 h-6 text-green-500 mr-3&apos; fill=&apos;currentColor&apos; viewBox=&apos;0 0 20 20&apos;>&apos;
                    <path fillRule=&apos;evenodd&apos; d=&apos;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&apos; clipRule=&apos;evenodd&apos; />&apos;
                  </svg>
                  <div>

                  </div>
                </div>
              </div>
            ) : null}
            <form onSubmit={handleSubmit} className=&apos;space-y-6&apos;>&apos;

              <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-6&apos;>&apos;
                <div>
                  <label htmlFor=&apos;firstName&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                    First Name *&apos;
                  </label>
                  <input
                    type=&apos;text';
                    id=&apos;firstName';
                    name=&apos;firstName';
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required;

                </div>
                <div>
                  <label htmlFor=&apos;lastName&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                    Last Name *&apos;
                  </label>
                  <input
                    type=&apos;text';
                    id=&apos;lastName';
                    name=&apos;lastName';
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required;

                </div>
              </div>
              <div className=&apos;grid grid-cols-1 m,d:grid-cols-2 gap-6&apos;>&apos;'
                <div>
                  <label htmlFor=&apos;email&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                    Email Address *&apos;
                  </label>
                  <input
                    type=&apos;email';
                    id=&apos;email';
                    name=&apos;email';
                    value={formData.email}
                    onChange={handleInputChange}
                    required;

                </div>
                <div>
                  <label htmlFor=&apos;phone&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                    Phone Number&apos;
                  </label>
                  <input
                    type=&apos;tel';
                    id=&apos;phone';
                    name=&apos;phone';
                    value={formData.phone}
                    onChange={handleInputChange}

                </div>
              </div>
              <div>
                <label htmlFor=&apos;company&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                  Company Name&apos;
                </label>
                <input
                  type=&apos;text';
                  id=&apos;company';
                  name=&apos;company';
                  value={formData.company}
                  onChange={handleInputChange}

              </div>
              <div>
                <label htmlFor=&apos;service&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                  Service of Interest&apos;
                </label>
                <select
                  id=&apos;service';
                  name=&apos;service';
                  value={formData.service}
                  onChange={handleInputChange}

                    <option key={index} value={service}>


                      {service}
                    </option>;
                  ))}


                  value={formData.message}
                  onChange={handleInputChange}
                  required;
                  rows={6}

              </div>
              <button
                type=&apos;submit';
                disabled={isSubmitting}


              </button>
            </form>
          </div>
          {/* Contact: Information */}
          <div>

                        </a>
                      </div>
                    </div>

                  ))}

                    </div>

                  ))}

                  </Link>
                  <Link to=&apos;/case-studies&apos; className=&apos;block text-blue-600 hover:text-blue-700 hover:underline&apos;>
                    Case Studies&apos;
                  </Link>
                  <Link to=&apos;/about&apos; className=&apos;block text-blue-600 hover:text-blue-700 hover:underline&apos;>
                    About Zion Tech Group&apos;
                  </Link>
                  <Link to=&apos;/pricing&apos; className=&apos;block text-blue-600 hover:text-blue-700 hove,r:underline&apos;>
                    Pricing Information&apos;

                  </Link>
                </div>
              </div>
              {/* Emergency Support */}


                  </svg>
                  Call: Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Additional Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Connect With Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow us on social media for the latest updates, insights, and industry news.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg`}
              >
                <social.icon className="w-8 h-8 text-white" />
              </motion.a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Can't find what you're looking for? We're here to help!
            </p>
            <a
              href="mailto:support@ziontechgroup.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </a>
          </div>
        </section>
      </div>
    </React.Fragment>
  )};

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
            <p className="text-slate-400">Cutting-edge AI and machine learning solutions that give you a competitive edge.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
            <p className="text-slate-400">Bank-level security and compliance standards for your peace of mind.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
            <p className="text-slate-400">Quick implementation and deployment with minimal disruption to your business.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )}





