    }
  ];
  const offices = [{
      \"city\": \'San Francisco\',
      \"address\": \'123 Tech Street, San Francisco, CA 94105\',
      \"phone\": \'+1 (555) 123-4567\',
      \"email\": \'sf@ziontechgroup.com\'
    },
    {
      \"city\": \'New York\',
      \"address\": \'456 Innovation Ave, New York, NY 10001\',
      \"phone\": \'+1 (555) 987-6543\',
      \"email\": \'ny@ziontechgroup.com\'
    },
    {
      \"city\": \'London\',
      \"address\": \'789 Digital Lane, London, UK EC1A 1BB\',
      \"phone\": \'+44 20 7123 4567\',
      \"email\": \'london@ziontechgroup.com\'
    }
  ];
  return (
    <MainLayout
      title=\"Contact Us - Zion Tech Group\"
      description=\"Get in touch with Zion Tech Group. We\'re here to help you transform your business with innovative technology solutions.\"
    >
      {/* Hero Section */}
      <section className=\"bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"text-center\">
            <h1 className=\"text-5xl font-bold mb-6\">Get In Touch</h1>
            <p className=\"text-xl max-w-3xl mx-auto\">
              Ready to transform your business? Let\'s discuss how our technology solutions 
              can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Information */}
      <section className=\"py-20\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16\">
            {contactInfo.map((info) => (
              <div key={info.title} className=\"text-center\">
                <div className=\"bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4\">
                  <info.icon className=\"h-8 w-8\" />
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className=\"text-blue-600 \"hover\": text-blue-700 transition-colors\"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className=\"text-gray-600\">{info.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form & Office Locations */}
      <section className=\"py-20 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12\">
            {/* Contact Form */}
            <div>
              <h2 className=\"text-3xl font-bold text-gray-900 mb-6\">Send Us a Message</h2>
              <form className=\"space-y-6\">
                <div className=\"grid grid-cols-1 \"md\": grid-cols-2 gap-6\">
                  <div>
                    <label htmlFor=\"firstName\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                      First Name *
                    </label>
                    <input
                      type=\"text\"
                      id=\"firstName\"
                      name=\"firstName\"
                      required
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\"
                    />
                  </div>
                  <div>
                    <label htmlFor=\"lastName\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                      Last Name *
                    </label>
                    <input
                      type=\"text\"
                      id=\"lastName\"
                      name=\"lastName\"
                      required
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                    Email Address *
                  </label>
                  <input
                    type=\"email\"
                    id=\"email\"
                    name=\"email\"
                    required
                    className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\"
                  />
                </div>
                <div>
                  <label htmlFor=\"company\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                    Company
                  </label>
                  <input
                    type=\"text\"
                    id=\"company\"
                    name=\"company\"
                    className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\"
                  />
                </div>
                <div>
                  <label htmlFor=\"phone\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                    Phone Number
                  </label>
                  <input
                    type=\"tel\"
                    id=\"phone\"
                    name=\"phone\"
                    className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\"
                  />
                </div>
                <div>
                  <label htmlFor=\"service\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                    Service of Interest
                  </label>
                  <select
                    id=\"service\"
                    name=\"service\"
                    className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\"
                  >
                    <option value=\"">Select a service</option>
                    <option value=\"ai-development\">AI Development</option>
                    <option value=\"cloud-solutions\">Cloud Solutions</option>
                    <option value=\"web-development\">Web Development</option>
                    <option value=\"mobile-development\">Mobile Development</option>
                    <option value=\"blockchain\">Blockchain Solutions</option>
                    <option value=\"iot-platforms\">IoT Platforms</option>
                    <option value=\"data-analytics\">Data Analytics</option>
                    <option value=\"cybersecurity\">Cybersecurity</option>
                    <option value=\"consulting\">Technology Consulting</option>
                  </select>
                </div>
                <div>
                  <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                    Message *
                  </label>
                  <textarea
                    id=\"message\"
                    name=\"message\"
                    rows={6}
                    required
                    className=\"w-full px-4 py-3 border border-gray-300 rounded-lg \"focus\": ring-2 focus:ring-blue-500 focus:border-transparent\"
                    placeholder=\"Tell us about your project or how we can help you...\"
                  ></textarea>
                </div>
                <button
                  type=\"submit\"
                  className=\"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center\"
                >
                  <Send className=\"mr-2 h-5 w-5\" />
                  Send Message
                </button>
              </form>
            </div>
            {/* Office Locations */}
            <div>
              <h2 className=\"text-3xl font-bold text-gray-900 mb-6\">Our Offices</h2>
              <div className=\"space-y-6\">
                {offices.map((office) => (
                  <div key={office.city} className=\"bg-white rounded-lg shadow-lg p-6\">
                    <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                      {office.city}
                    </h3>
                    <div className=\"space-y-2 text-gray-600\">
                      <div className=\"flex items-start\">
                        <MapPin className=\"h-5 w-5 mr-2 mt-0.5 text-blue-600\" />
                        <span>{office.address}</span>
                      </div>
                      <div className=\"flex items-center\">
                        <Phone className=\"h-5 w-5 mr-2 text-blue-600\" />
                        <a href={`\"tel\": ${office.phone}`} className=\""hover\": text-blue-600\">
                          {office.phone}
                        </a>
                      </div>
                      <div className=\"flex items-center\">
                        <Mail className=\"h-5 w-5 mr-2 text-blue-600\" />
                        <a href={`\"mailto\": ${office.email}`} className=\""hover\": text-blue-600\">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
  );
};
          {/* Contact Information */}
          <section className=\"py-20\">
            <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
              <motion.div
                initial={{ opacity: 0, \"y\": 20 }}
                animate={{ \"opacity\": 1, \"y\": 0 }}
                    key={index}
                    initial={{ \"opacity\": 0, \"y\": 20 }}
                    animate={{ \"opacity\": 1, \"y\": 0 }}
                    transition={{ \"duration\": 0.6, \"delay\": index * 0.1 }}
                    className=\"bg-white rounded-xl p-8 shadow-lg \"hover\": shado w-xl transition-shadow duration-300 text-center\"
                  >
                    <div className=\"text-blue-600 mb-4 flex justify-center\">
                      {info.icon}
                    </div>
                    <h3 className=\"text-xl font-bold text-gray-900 mb-3\">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className=\"text-gray-600 \"hover\": tex t-blue-600 transition-colors whitespace-pre-line\"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className=\"text-gray-600 whitespace-pre-line\">
                        {info.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Contact Form */}
          <section className=\"bg-gray-50 py-20\">
            <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
              <motion.div
                initial={{ opacity: 0, \"y\": 20 }}
                animate={{ \"opacity\": 1, \"y\": 0 }}
                  initial={{ opacity: 0, \"y\": 20 }}
                  animate={{ \"opacity\": 1, \"y\": 0 }}
                  transition={{ \"duration\": 0.6, \"delay\": 0.2 }}
                  className=\"bg-white rounded-xl shadow-lg p-8\"
                >
                  <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 gap-6 mb-6\">
                    <div>
                      <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                        Full Name *
                      </label>
                      <input type=\"text\"
                        id=\"name\"
                        name=\"name\"
                        required
                        className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"
                        placeholder=\"Your full name\"
                       />
                    </div>
                    <div>
                      <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                        Email Address *
                      </label>
                      <input type=\"email\"
                        id=\"email\"
                        name=\"email\"
                        required
                        className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"
                        id=\"phone\"
                        name=\"phone\"
                        className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"
                        placeholder=\"+1 (555) 123-4567\"
                       />
                    </div>
                    <div>
                      <label htmlFor=\"company\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                        Company
                      </label>
                      <input type=\"text\"
                        id=\"company\"
                        name=\"company\"
                        className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"
                        placeholder=\"Your company name\"
                    <select
                      id=\"service\"
                      name=\"service\"
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"
                    >
                      <option value=\"">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    <textarea
                      id=\"message\"
                      name=\"message\"
                      rows={6}
                      required
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg \"focus\": rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"
                      placeholder=\"Tell us about your project requirements...\"
                    ></textarea>
                  </div>
                  <motion.button
                    type=\"submit\"
        {/* Hero Section */}
        <section className=\"relative py-20 px-4\">
          <div className=\"max-w-7xl mx-auto\">
            <div className=\"text-center\">
              <h1 className=\"text-5xl \"md\": text-6xl font-bold text-white mb-6\">
                Get in <span className=\"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent\">Touch</span>
              </h1>
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto mb-8\">
                Ready to transform your business with cutting-edge technology? Let\'s discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>
        {/* Contact Form & Info Section */}
        <section className=\"py-16 px-4\">
          <div className=\"max-w-7xl mx-auto\">
            <div className=\"grid grid-cols-1 \"lg\": grid-cols-2 gap-12\">
              {/* Contact Form */}
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className=\"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 \"hover\": from-cyan-600 hover:to-blue-600 transition-all duration-300\"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className=\"space-y-6\">
                    <div className=\"grid grid-cols-1 \"md\": grid-cols-2 gap-6\">
                      <div>
                        <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-300 mb-2\">
                          Full Name *
                        </label>
                        <input
                          type=\"text\"
                          id=\"name\"
                          name=\"name\"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                          placeholder=\"Your full name\"
                        />
                      </div>
                      <div>
                        <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-300 mb-2\">
                          Email Address *
                        </label>
                        <input
                          type=\"email\"
                          id=\"email\"
                          name=\"email\"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                        <input
                          type=\"text\"
                          id=\"company\"
                          name=\"company\"
                          value={formData.company}
                          onChange={handleInputChange}
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                          placeholder=\"Your company name\"
                        />
                      </div>
                      <div>
                        <label htmlFor=\"phone\" className=\"block text-sm font-medium text-gray-300 mb-2\">
                          Phone Number
                        </label>
                        <input
                          type=\"tel\"
                          id=\"phone\"
                          name=\"phone\"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                          placeholder=\"+1 (555) 123-4567\"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor=\"service\" className=\"block text-sm font-medium text-gray-300 mb-2\">
                        Service Interest
                      </label>
                      <select
                        id=\"service\"
                        name=\"service\"
                        value={formData.service}
                        onChange={handleInputChange}
                        className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                      >
                        <option value=\"">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-300 mb-2\">
                        Message *
                      </label>
                      <textarea
                        id=\"message\"
                        name=\"message\"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                        placeholder=\"Tell us about your project or requirements...\"
                      />
                    </div>
                    <button
                      type=\"submit\"
                      disabled={isSubmitting}
                      className=\"w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 \"hover\": from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300\"
                    >
                      {isSubmitting ? (
                        <>
                          <div className=\"animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2\"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className=\"w-5 h-5 mr-2\" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
              {/* Contact Information */}
