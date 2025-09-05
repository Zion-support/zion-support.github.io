import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    // console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Get in touch with Zion Tech Group. We're here to help you transform your business with cutting-edge technology solutions.&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Get In Touch
            </h1>
                          <p className=&quot;text-xl text-white/80 max-w-3xl mx-auto&quot;>
                Ready to transform your business? Let's discuss how our cutting-edge technology solutions can help you achieve your goals.
              </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className=&quot;py-20 px-6 bg-slate-800&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16&quot;>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8 backdrop-blur-xl&quot;
            >
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Send us a message</h2>
              <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
                <div>
                  <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>
                    Full Name *
                  </label>
                  <input
                    type=&quot;text&quot;
                    id=&quot;name&quot;
                    name=&quot;name&quot;
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className=&quot;w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300&quot;
                    placeholder=&quot;Enter your full name&quot;
                  />
                </div>

                <div>
                  <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>
                    Email Address *
                  </label>
                  <input
                    type=&quot;email&quot;
                    id=&quot;email&quot;
                    name=&quot;email&quot;
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className=&quot;w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300&quot;
                    placeholder=&quot;Enter your email address&quot;
                  />
                </div>

                <div>
                  <label htmlFor=&quot;company&quot; className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>
                    Company
                  </label>
                  <input
                    type=&quot;text&quot;
                    id=&quot;company&quot;
                    name=&quot;company&quot;
                    value={formData.company}
                    onChange={handleChange}
                    className=&quot;w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300&quot;
                    placeholder=&quot;Enter your company name&quot;
                  />
                </div>

                <div>
                  <label htmlFor=&quot;message&quot; className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>
                    Message *
                  </label>
                  <textarea
                    id=&quot;message&quot;
                    name=&quot;message&quot;
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className=&quot;w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none&quot;
                    placeholder=&quot;Tell us about your project or how we can help&quot;
                  />
                </div>

                <button
                  type=&quot;submit&quot;
                  className=&quot;w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl&quot;
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;space-y-8&quot;
            >
              <div>
                <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Contact Information</h2>
                <p className=&quot;text-white/70 text-lg leading-relaxed mb-8&quot;>
                  We're here to help you succeed. Reach out to us through any of the channels below, and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className=&quot;space-y-6&quot;>
                <div className=&quot;flex items-start space-x-4&quot;>
                  <div className=&quot;w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0&quot;>
                    <Mail className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>Email</h3>
                    <p className=&quot;text-white/70&quot;>contact@ziontechgroup.com</p>
                    <p className=&quot;text-white/50 text-sm&quot;>We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className=&quot;flex items-start space-x-4&quot;>
                  <div className=&quot;w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0&quot;>
                    <Phone className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>Phone</h3>
                    <p className=&quot;text-white/70&quot;>+1 (555) 123-4567</p>
                    <p className=&quot;text-white/50 text-sm&quot;>Available Monday-Friday, 9AM-6PM PST</p>
                  </div>
                </div>

                <div className=&quot;flex items-start space-x-4&quot;>
                  <div className=&quot;w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0&quot;>
                    <MapPin className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>Office</h3>
                    <p className=&quot;text-white/70&quot;>San Francisco, CA</p>
                    <p className=&quot;text-white/50 text-sm&quot;>Visit by appointment only</p>
                  </div>
                </div>

                <div className=&quot;flex items-start space-x-4&quot;>
                  <div className=&quot;w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0&quot;>
                    <Clock className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>Response Time</h3>
                    <p className=&quot;text-white/70&quot;>Within 24 hours</p>
                    <p className=&quot;text-white/50 text-sm&quot;>For urgent matters, call us directly</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className=&quot;bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-6&quot;>
                <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Why Choose Zion Tech Group?</h3>
                <ul className=&quot;space-y-2 text-white/70&quot;>
                  <li className=&quot;flex items-center gap-2&quot;>
                    <span className=&quot;text-cyan-400&quot;>✓</span>
                    Enterprise-grade security and compliance
                  </li>
                  <li className=&quot;flex items-center gap-2&quot;>
                    <span className=&quot;text-cyan-400&quot;>✓</span>
                    24/7 technical support
                  </li>
                  <li className=&quot;flex items-center gap-2&quot;>
                    <span className=&quot;text-cyan-400&quot;>✓</span>
                    Proven track record with Fortune 500 companies
                  </li>
                  <li className=&quot;flex items-center gap-2&quot;>
                    <span className=&quot;text-cyan-400&quot;>✓</span>
                    Custom solutions tailored to your needs
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  );
}