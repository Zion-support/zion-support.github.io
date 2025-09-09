import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
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

  const services = [
    "AI & Machine Learning",
    "Blockchain & Web3",
    "IoT & Edge Computing",
    "Quantum Computing",
    "AR/VR & Metaverse",
    "Cybersecurity",
    "Cloud & Infrastructure",
    "Business Intelligence",
    "Communication Tools",
    "Specialized AI Tools",
    "Emerging Technologies",
    "Custom Development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="Contact Us - Zion Tech Group" 
        description="Get in touch with Zion Tech Group for AI, blockchain, quantum computing, and emerging technology solutions. Contact us for consultations and project inquiries." 
        keywords="contact Zion Tech Group, AI consulting, blockchain development, quantum computing, technology consulting" 
        url="https://ziontechgroup.com/contact"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-blue overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-zion-cyan-light rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline - flex items - center justify - center w - 20 h - 20 bg - gradient - to - br from - zion - cyan to - zion - purple rounded - 2xl mb - 8"
            >
              <MessageSquare className="w - 10 h - 10 text - white"       />
            </motion.div>

            <h1 className="text - 5xl md:text - 6xl font - bold text - white mb - 6">
              Get in < span className="text - gradient block">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? Our team of experts is here to help you 
              navigate the future of AI, blockchain, quantum computing, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose your preferred method of communication. We're here to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={`w - 16 h - 16 bg - gradient - to - br ${method.color} rounded - xl flex items - center justify - center mx - auto mb - 4 group - hover:scale - 110 transition - transform duration - 300`}
                >
                  <method.icon className="w - 8 h - 8 text - white"       />
                </div>

                <h3 className="text - lg font - bold text - white mb - 2">
                  {method.title}
                </h3>
                <p className="text - zion - cyan font - semibold mb - 1">
                  {method.value}
                </p>
                <p className="text - zion - slate - light text - sm mb - 4">
                  {method.description}
                </p>

                {method.action && (<a
                    href={method.action}
                    target={method.action.startsWith ('http') ? '_blank' : null}
                    rel={
                      method.action.startsWith ('http') ? 'noopener noreferrer'
                        : null
                    }
                    className="inline - flex items - center gap - 2 text - zion - cyan hover:text - white transition - colors duration - 300"
                  >
                    <span className="text - sm font - medium">Contact</span>
                    <Send className="w - 4 h - 4"       />
                  </a>) }
              </motion.div>) ) }
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">Send Us a Message</h2>
                <p className="text-zion-slate-light text-lg">
                  Tell us about your project and we'll get back to you within 24 hours with a personalized solution.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="w - 16 h - 16 text - green - 400 mx - auto mb - 4"       />
                  <h3 className="text - 2xl font - bold text - white mb - 2">
                    Message Sent!
                  </h3>
                  <p className="text - green - 200">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </motion.div>) : (<form onSubmit={handleSubmit} className="space - y-6">
                  <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">
                    {contactFormFields.slice (0, 2) .map (field => (<div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block text - white font - medium mb - 2"
                        >
                          {field.label}{' '}
                          {field.required && (<span className="text - red - 400">*</span>) }
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w - full px - 4 py - 3 bg - zion - blue - dark / 50 border border - zion - cyan / 20 rounded - xl text - white placeholder - zion - slate - light focus:border - zion - cyan focus:outline - none transition - colors duration - 300"
                              />
                      </div>) ) }
                  </div>

                  <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">
                    {contactFormFields.slice (2, 4) .map (field => (<div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block text - white font - medium mb - 2"
                        >
                          {field.label}{' '}
                          {field.required && (<span className="text - red - 400">*</span>) }
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w - full px - 4 py - 3 bg - zion - blue - dark / 50 border border - zion - cyan / 20 rounded - xl text - white placeholder - zion - slate - light focus:border - zion - cyan focus:outline - none transition - colors duration - 300"
                              />
                      </div>) ) }
                  </div>

                  <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">
                    {contactFormFields.slice (4, 6) .map (field => (<div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block text - white font - medium mb - 2"
                        >
                          {field.label}{' '}
                          {field.required && (<span className="text - red - 400">*</span>) }
                        </label>
                        {field.type === 'select' ? (<select
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            required={field.required}
                            className="w - full px - 4 py - 3 bg - zion - blue - dark / 50 border border - zion - cyan / 20 rounded - xl text - white focus:border - zion - cyan focus:outline - none transition - colors duration - 300"
                          >
                            <option value="">Select a service</option>
                            {field.options.map (option => (<option key={option} value={option}>
                                {option}
                              </option>) ) }
                          </select>) : (<input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            required={field.required}
                            placeholder={field.placeholder}
                            className="w - full px - 4 py - 3 bg - zion - blue - dark / 50 border border - zion - cyan / 20 rounded - xl text - white placeholder - zion - slate - light focus:border - zion - cyan focus:outline - none transition - colors duration - 300"
                                />) }
                      </div>) ) }
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent backdrop-blur-sm"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-zion-blue-dark text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      className="w - full px - 4 py - 3 bg - zion - blue - dark / 50 border border - zion - cyan / 20 rounded - xl text - white placeholder - zion - slate - light focus:border - zion - cyan focus:outline - none transition - colors duration - 300 resize - none"
                          />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text - 2xl font - bold text - white mb - 4">
                  About Zion Tech Group
                </h3>
                <p className="text - zion - slate - light leading - relaxed mb - 6">
                  We are a leading technology company specializing in AI,
                  cybersecurity, cloud solutions, and digital transformation.
                  Our team of experts is dedicated to helping businesses
                  leverage cutting - edge technology to achieve their goals.
                </p>
                <div className="flex items - center gap - 3 text - zion - cyan">
                  <Building className="w - 5 h - 5"       />
                  <span className="font - medium">Established 2020</span>
                </div>
              </div>

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