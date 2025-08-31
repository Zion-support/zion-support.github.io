import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
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
  Building,
  ArrowRight
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    'AI & Machine Learning',
    'Cybersecurity Solutions',
    'Cloud Infrastructure',
    'Digital Transformation',
    'Micro SaaS Platforms',
    'Quantum Computing',
    'Custom Development',
    'Consulting Services'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 302 464 0950',
      link: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008, Middletown, DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      link: null
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade cybersecurity and data protection'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick implementation and time-to-value'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-50 via-white to-zion-50 dark:from-zion-slate-900 dark:via-zion-slate-800 dark:to-zion-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-zion-slate-800 border-b border-zion-slate-200 dark:border-zion-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-zion-slate-900 dark:text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zion-slate-600 dark:text-zion-slate-400 max-w-3xl mx-auto"
          >
            Ready to transform your business with cutting-edge AI technology? Let's discuss how we can help you achieve your goals.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zion-slate-800 rounded-2xl shadow-xl border border-zion-slate-200 dark:border-zion-slate-700 p-8"
          >
            <h2 className="text-2xl font-bold text-zion-slate-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-zion-slate-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-zion-slate-600 dark:text-zion-slate-400">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zion-slate-700 dark:text-zion-slate-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-zion-slate-300 dark:border-zion-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-500 focus:border-transparent bg-white dark:bg-zion-slate-700 text-zion-slate-900 dark:text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zion-slate-700 dark:text-zion-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-zion-slate-300 dark:border-zion-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-500 focus:border-transparent bg-white dark:bg-zion-slate-700 text-zion-slate-900 dark:text-white"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zion-slate-700 dark:text-zion-slate-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-zion-slate-300 dark:border-zion-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-500 focus:border-transparent bg-white dark:bg-zion-slate-700 text-zion-slate-900 dark:text-white"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zion-slate-700 dark:text-zion-slate-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-zion-slate-300 dark:border-zion-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-500 focus:border-transparent bg-white dark:bg-zion-slate-700 text-zion-slate-900 dark:text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zion-slate-700 dark:text-zion-slate-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-zion-slate-300 dark:border-zion-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-500 focus:border-transparent bg-white dark:bg-zion-slate-700 text-zion-slate-900 dark:text-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zion-slate-700 dark:text-zion-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-zion-slate-300 dark:border-zion-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-500 focus:border-transparent bg-white dark:bg-zion-slate-700 text-zion-slate-900 dark:text-white resize-none"
                    placeholder="Tell us about your project, challenges, or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-zion-500 hover:bg-zion-600 disabled:bg-zion-slate-300 text-white font-semibold rounded-lg transition-colors disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-zion-slate-900 dark:text-white">
                Contact Information
              </h2>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-zion-100 dark:bg-zion-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-zion-600 dark:text-zion-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-slate-900 dark:text-white mb-1">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-zion-slate-600 dark:text-zion-slate-400 hover:text-zion-500 dark:hover:text-zion-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-zion-slate-600 dark:text-zion-slate-400">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-zion-slate-900 dark:text-white">
                Why Choose Zion Tech Group?
              </h2>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-white dark:bg-zion-slate-700 rounded-lg border border-zion-slate-200 dark:border-zion-slate-600"
                  >
                    <div className="w-10 h-10 bg-zion-100 dark:bg-zion-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-zion-600 dark:text-zion-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zion-slate-900 dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-zion-slate-600 dark:text-zion-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-zion-500 to-zion-600 rounded-xl p-6 text-white text-center"
            >
              <h3 className="text-xl font-bold mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-zion-100 mb-4">
                Schedule a free consultation to discuss your project requirements.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-white text-zion-600 font-semibold rounded-lg hover:bg-zion-50 transition-colors"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
