import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: '',
    budget: '',
    timeline: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          service: '',
          budget: '',
          timeline: '',
          preferredContact: 'email'
        });
      }, 3000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (302) 464-0950',
      link: 'tel:+13024640950',
      description: 'Call us directly for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us a detailed message'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008, Middletown, DE 19709',
      link: null,
      description: 'Visit our headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      link: null,
      description: 'We\'re here when you need us'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Quantum Computing',
    'Cloud & DevOps',
    'Cybersecurity',
    'Digital Transformation',
    'IT Consulting',
    'Custom Software Development',
    'Other'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    'Over $500,000'
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Flexible'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI solutions, quantum computing, and digital transformation services. Contact our experts today."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge AI and quantum computing solutions? 
              Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors block mb-2"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-cyan-400 mb-2">{info.value}</p>
                )}
                <p className="text-gray-300 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Send Us a Message</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/30"
            >
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget, index) => (
                          <option key={index} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Preferred Contact Method</label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="mr-2 text-cyan-500"
                        />
                        <span className="text-gray-300">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="mr-2 text-cyan-500"
                        />
                        <span className="text-gray-300">Phone</span>
                      </label>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center mx-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Don't wait to transform your business. Contact us today to discuss your project 
              and discover how our AI and quantum computing solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
