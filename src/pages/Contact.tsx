import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Globe,
  Building
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Tech Plaza, Silicon Valley, CA',
      description: 'Schedule a meeting'
    }
  ];

  const officeLocations = [
    {
      city: 'Silicon Valley',
      country: 'United States',
      address: '123 Tech Plaza, Suite 100',
      cityState: 'San Jose, CA 95113',
      phone: '+1 (555) 123-4567',
      email: 'us@ziontechgroup.com'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '456 Innovation Street',
      cityState: 'London, EC1A 1BB',
      phone: '+44 20 1234 5678',
      email: 'uk@ziontechgroup.com'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '789 Digital Hub',
      cityState: 'Singapore 018956',
      phone: '+65 6123 4567',
      email: 'sg@ziontechgroup.com'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Service Consultation',
    'Partnership Opportunity',
    'Career Opportunities',
    'Technical Support',
    'Sales Inquiry',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Get in <span className="text-zion-cyan">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss how Zion Tech Group can help you achieve your technology goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">How Can We Help?</h2>
            <p className="text-lg text-zion-slate-light">Choose your preferred way to reach us</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate/30 rounded-lg p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <method.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                <p className="text-zion-cyan text-lg font-semibold mb-2">{method.details}</p>
                <p className="text-zion-slate-light">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-all duration-300"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-all duration-300"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-zion-cyan text-zion-slate-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-zion-slate-dark border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">Our Global Offices</h2>
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-zion-slate/30 rounded-lg p-6 border border-zion-cyan/20"
                  >
                    <div className="flex items-start gap-4">
                      <Building className="w-8 h-8 text-zion-cyan mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{office.city}, {office.country}</h3>
                        <div className="space-y-2 text-zion-slate-light">
                          <p className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-zion-cyan" />
                            {office.address}
                          </p>
                          <p className="ml-6">{office.cityState}</p>
                          <p className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-zion-cyan" />
                            {office.phone}
                          </p>
                          <p className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-zion-cyan" />
                            {office.email}
                          </p>
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

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-zion-slate-light">Quick answers to common questions</p>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                question: "What services does Zion Tech Group offer?",
                answer: "We offer comprehensive technology solutions including AI services, cloud computing, cybersecurity, IT infrastructure, digital transformation, and consulting services."
              },
              {
                question: "How quickly can you respond to inquiries?",
                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we have emergency contact procedures in place."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Yes, we work with businesses of all sizes, from startups to enterprise organizations. We tailor our solutions to meet your specific needs and budget."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We have expertise across multiple industries including healthcare, finance, manufacturing, retail, and technology. Our solutions are adaptable to any sector."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate/30 rounded-lg p-6 border border-zion-cyan/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-zion-slate-light leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Let's discuss your technology needs and explore how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan text-zion-slate-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-all duration-300">
                Schedule a Consultation
              </button>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300">
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
