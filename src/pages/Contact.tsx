import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle,
  Building,
  Globe,
  Users,
  Zap,
  Brain,
  Cloud,
  Shield,
  ShoppingCart,
  Star,
  Rocket,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

interface ContactMethod {
  title: string;
  description: string;
  icon: any;
  value: string;
  link?: string;
  color: string;
}

interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  icon: any;
}

const contactMethods: ContactMethod[] = [
  {
    title: 'Email Us',
    description: 'Get in touch via email for general inquiries',
    icon: Mail,
    value: 'hello@ziontechgroup.com',
    link: 'mailto:hello@ziontechgroup.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Call Us',
    description: 'Speak directly with our team',
    icon: Phone,
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Live Chat',
    description: 'Chat with our support team in real-time',
    icon: MessageCircle,
    value: 'Available 24/7',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Support Portal',
    description: 'Access our comprehensive help center',
    icon: Users,
    value: 'help.ziontechgroup.com',
    link: 'https://help.ziontechgroup.com',
    color: 'from-orange-500 to-red-500'
  }
];

const officeLocations: OfficeLocation[] = [
  {
    city: 'San Francisco',
    country: 'United States',
    address: '123 Innovation Drive, San Francisco, CA 94105',
    phone: '+1 (555) 123-4567',
    email: 'sf@ziontechgroup.com',
    timezone: 'PST (UTC-8)',
    icon: Building
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '456 Tech Square, London, EC2A 4BX',
    phone: '+44 20 1234 5678',
    email: 'london@ziontechgroup.com',
    timezone: 'GMT (UTC+0)',
    icon: Building
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '789 Digital Hub, Singapore 018956',
    phone: '+65 6123 4567',
    email: 'singapore@ziontechgroup.com',
    timezone: 'SGT (UTC+8)',
    icon: Building
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    address: '321 Future Tower, Tokyo 100-0001',
    phone: '+81 3-1234-5678',
    email: 'tokyo@ziontechgroup.com',
    timezone: 'JST (UTC+9)',
    icon: Building
  }
];

const departments = [
  {
    name: 'Sales & Business Development',
    email: 'sales@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    description: 'For new business inquiries and partnerships'
  },
  {
    name: 'Technical Support',
    email: 'support@ziontechgroup.com',
    phone: '+1 (555) 123-4568',
    description: 'For technical issues and product support'
  },
  {
    name: 'Customer Success',
    email: 'success@ziontechgroup.com',
    phone: '+1 (555) 123-4569',
    description: 'For existing customer assistance'
  },
  {
    name: 'Partnerships',
    email: 'partnerships@ziontechgroup.com',
    phone: '+1 (555) 123-4570',
    description: 'For strategic partnerships and integrations'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    department: 'general'
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
        subject: '',
        message: '',
        department: 'general'
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to transform your business with AI? We're here to help. Reach out to our team 
              and let's discuss how we can drive innovation and growth together.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">How Can We Help?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the best way to reach us based on your needs. We're here to support you 24/7.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center p-6"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{method.description}</p>
              {method.link ? (
                <a
                  href={method.link}
                  className="text-zion-cyan hover:text-zion-cyan/80 transition-colors font-medium"
                >
                  {method.value}
                </a>
              ) : (
                <span className="text-zion-cyan font-medium">{method.value}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form & Office Locations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan/40 focus:outline-none focus:ring-2 focus:ring-zion-cyan/20"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan/40 focus:outline-none focus:ring-2 focus:ring-zion-cyan/20"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan/40 focus:outline-none focus:ring-2 focus:ring-zion-cyan/20"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan/40 focus:outline-none focus:ring-2 focus:ring-zion-cyan/20"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan/40 focus:outline-none focus:ring-2 focus:ring-zion-cyan/20"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-2">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan/40 focus:outline-none focus:ring-2 focus:ring-zion-cyan/20"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Business Development</option>
                    <option value="support">Technical Support</option>
                    <option value="success">Customer Success</option>
                    <option value="partnerships">Partnerships</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan/40 focus:outline-none focus:ring-2 focus:ring-zion-cyan/20"
                    placeholder="Enter message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan/40 focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Our Global Offices</h2>
            <div className="space-y-6">
              {officeLocations.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                      <office.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{office.city}, {office.country}</h3>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-zion-cyan" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-zion-cyan" />
                          <a href={`tel:${office.phone}`} className="hover:text-zion-cyan transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-zion-cyan" />
                          <a href={`mailto:${office.email}`} className="hover:text-zion-cyan transition-colors">
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-zion-cyan" />
                          <span>{office.timezone}</span>
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

      {/* Departments */}
      <div className="bg-black/20 backdrop-blur-sm border-y border-zion-cyan/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Contact Specific Departments</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Need to reach a specific team? Here are the direct contact details for each department.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3">{dept.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{dept.description}</p>
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${dept.email}`}
                    className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {dept.email}
                  </a>
                  <a
                    href={`tel:${dept.phone}`}
                    className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {dept.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Connect With Us</h2>
            <p className="text-gray-300 mb-6">
              Follow us on social media for the latest updates, industry insights, and AI innovation news.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Twitter className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://youtube.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Youtube className="w-6 h-6 text-white" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for exclusive insights, product updates, and industry trends.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan/40 focus:outline-none focus:ring-2 focus:ring-zion-cyan/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl border border-zion-cyan/20 p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions can transform your business operations and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+15551234567"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 font-semibold flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:hello@ziontechgroup.com"
                className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20 font-semibold flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}