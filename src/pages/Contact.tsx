import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, 
  Send, CheckCircle, Building, Globe, Users 
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Call us during business hours',
      action: 'tel:+13024640950',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@ziontechgroup.com',
      description: 'Send us a message anytime',
      action: 'mailto:info@ziontechgroup.com',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Wilmington, DE, USA',
      description: 'Visit our headquarters',
      action: '#',
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      description: '24/7 emergency support available',
      action: '#',
      color: 'bg-orange-500'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Cybersecurity',
    'IT Infrastructure',
    'Digital Transformation',
    'Consulting',
    'Quantum Technology',
    'Other'
  ];

  const officeLocations = [
    {
      city: 'Wilmington, DE',
      country: 'United States',
      type: 'Headquarters',
      address: '123 Technology Drive, Suite 100',
      zip: '19801',
      phone: '+1 (302) 464-0950',
      email: 'info@ziontechgroup.com'
    },
    {
      city: 'San Francisco, CA',
      country: 'United States',
      type: 'West Coast Office',
      address: '456 Innovation Way',
      zip: '94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@ziontechgroup.com'
    },
    {
      city: 'London, UK',
      country: 'United Kingdom',
      type: 'European Office',
      address: '789 Tech Square',
      zip: 'EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@ziontechgroup.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Ready to transform your business with cutting-edge technology solutions? 
            Let's discuss how we can help you achieve your goals.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Ways to Connect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to reach us. Our team is ready to help 
              you with any questions or project requirements.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <a
                  href={method.action}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {method.details}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours. 
                We're excited to learn about your project and how we can help.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Offices</h2>
              <p className="text-gray-600 mb-8">
                Visit us at any of our locations or schedule a virtual meeting. 
                We're here to serve you wherever you are.
              </p>

              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{office.city}</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            {office.type}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{office.address}</p>
                        <p className="text-gray-600 mb-2">{office.city}, {office.country} {office.zip}</p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>{office.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can transform your business 
              and help you achieve your goals faster and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Call Us Now
                <Phone className="ml-2 h-5 w-5" />
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Send Email
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                We're Here to Help
              </h2>
              <p className="text-lg text-gray-600">
                Whether you have a question, need a quote, or want to discuss a project, 
                our team is ready to assist you.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600">
                  We respond to all inquiries within 24 hours, often much sooner.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Connect with our experienced technology professionals and consultants.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  We serve clients worldwide with local expertise and global capabilities.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
