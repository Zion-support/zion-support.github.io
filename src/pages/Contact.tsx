import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Building2,
  Globe,
  Users,
  Zap,
  Brain,
  Shield,
  MessageSquare,
  Building
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    service: '',
    budget: '',
    timeline: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
          preferredContact: 'email',
          subject: ''
        });
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
              value: '+1 302 464 0950',
      description: 'Available Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
              value: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Global headquarters and innovation center'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      value: '9:00 AM - 6:00 PM EST',
      description: 'Monday through Friday'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud & DevOps',
    'Digital Transformation',
    'Blockchain & Web3',
    'Custom Development',
    'Consulting'
  ];

  const budgets = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    '$500K+'
  ];

  const timelines = [
    'Immediate (1-3 months)',
    'Short-term (3-6 months)',
    'Medium-term (6-12 months)',
    'Long-term (12+ months)'
  ];

  const offices = [
    {
      city: "Middletown",
      country: "United States",
      address: "364 E Main St STE 1008",
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "456 Tech Square, Floor 3",
      phone: "+44 20 1234 5678",
      email: "london@ziontechgroup.com"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "789 Digital Hub, Level 5",
      phone: "+65 6123 4567",
      email: "singapore@ziontechgroup.com"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI solutions, technology consulting, and enterprise support. Get in touch with our team of experts." />
        <meta name="keywords" content="contact Zion Tech Group, AI consulting, technology support, enterprise solutions, get quote" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                Get in Touch
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business with cutting-edge technology? Let's discuss how our 
                innovative solutions can drive your success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{info.title}</h3>
                  <p className="text-xl text-blue-400 mb-2">{info.value}</p>
                  <p className="text-gray-400">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Project</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Tell us about your project and we'll get back to you with a customized solution.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-24 h-24 text-green-400 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-300 text-lg">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-white font-semibold mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-slate-800 text-white">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-white font-semibold mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                        >
                          <option value="">Select budget range</option>
                          {budgets.map((budget) => (
                            <option key={budget} value={budget} className="bg-slate-800 text-white">
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-white font-semibold mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline} className="bg-slate-800 text-white">
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-semibold mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                        placeholder="Describe your project, goals, and requirements..."
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                            className="mr-2 text-blue-400"
                          />
                          <span className="text-white">Email</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                            className="mr-2 text-blue-400"
                          />
                          <span className="text-white">Phone</span>
                        </label>
                      </div>
                    </div>

                    <div className="text-center">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Choose Us</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another technology company. We're your strategic partner in digital transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'AI Expertise',
                  description: 'Cutting-edge artificial intelligence and machine learning solutions'
                },
                {
                  icon: Shield,
                  title: 'Security First',
                  description: 'Enterprise-grade security and compliance frameworks'
                },
                {
                  icon: Users,
                  title: 'Dedicated Team',
                  description: 'Experienced professionals committed to your success'
                },
                {
                  icon: Zap,
                  title: 'Fast Delivery',
                  description: 'Agile development with rapid deployment capabilities'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <feature.icon className="w-16 h-16 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Offices Section */}
        <section className="py-20 bg-zinc-800/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Global Presence
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                We're here to serve you wherever you are in the world.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 text-cyan-400 mr-2" />
                    <h3 className="text-xl font-semibold text-white">{office.city}</h3>
                  </div>
                  <p className="text-zinc-400 mb-4">{office.country}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-zinc-300">{office.address}</p>
                    <p className="text-zinc-400">{office.phone}</p>
                    <p className="text-zinc-400">{office.email}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-zinc-300">
                Quick answers to common questions about working with us.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "How quickly can you respond to inquiries?",
                  answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we offer priority support channels."
                },
                {
                  question: "Do you offer free consultations?",
                  answer: "Yes, we offer a complimentary 30-minute consultation to discuss your needs and explore how our solutions can help your business."
                },
                {
                  question: "What industries do you specialize in?",
                  answer: "We serve clients across all industries, with particular expertise in healthcare, finance, manufacturing, retail, and technology sectors."
                },
                {
                  question: "Can you work with international clients?",
                  answer: "Absolutely! We have offices in multiple countries and serve clients globally with localized support and compliance expertise."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-zinc-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join hundreds of companies that have already transformed their business with our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Schedule a Call
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  View Our Work
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
