import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
<<<<<<< HEAD
  Send, 
  MessageSquare, 
  Globe, 
  Building,
  Users,
  CheckCircle,
  ArrowRight,
  Mailbox,
  Calendar,
  Star
=======
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Building,
  Globe,
  Users,
  Award
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
<<<<<<< HEAD
    subject: '',
    message: '',
    department: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
=======
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
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
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message and we'll get back to you within 24 hours",
      contact: "info@ziontechgroup.com",
      action: "Send Email",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team during business hours",
      contact: "+1 (302) 464-0950",
      action: "Call Now",
      color: "from-zion-purple to-zion-pink"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters in Middletown, Delaware",
      contact: "364 E Main St STE 1008, Middletown, DE 19709",
      action: "Get Directions",
      color: "from-zion-green to-zion-emerald"
    }
  ];

  const departments = [
    { id: 'general', name: 'General Inquiry', description: 'General questions about our company and services' },
    { id: 'sales', name: 'Sales & Business Development', description: 'Learn about our solutions and pricing' },
    { id: 'support', name: 'Technical Support', description: 'Get help with our products and services' },
    { id: 'partnerships', name: 'Partnerships', description: 'Explore collaboration opportunities' },
    { id: 'careers', name: 'Careers', description: 'Job opportunities and recruitment' },
    { id: 'media', name: 'Media & Press', description: 'Press inquiries and media relations' }
=======
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 302 464 0950",
      description: "Available 24/7 for urgent support"
    },
    {
      icon: Mail,
      title: "Email",
      details: "kleber@ziontechgroup.com",
      description: "Get a response within 2 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "364 E Main St STE 1008 Middletown DE 19709",
      description: "Visit us for in-person consultations"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM EST",
      description: "Extended hours available by appointment"
    }
  ];

  const services = [
    "AI & Machine Learning",
    "Cloud Infrastructure",
    "Cybersecurity",
    "Digital Transformation",
    "Quantum Computing",
    "IoT Solutions",
    "Blockchain Services",
    "Custom Development"
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
=======
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4">
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Get in{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge AI and technology solutions? 
              Let's start a conversation about how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the method that works best for you. We're here to help and ready to respond.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group text-center"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{method.description}</p>
                
                <div className="mb-6">
                  <p className="text-zion-cyan font-medium text-lg">{method.contact}</p>
                </div>
                
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Form & Office Info */}
      <section className="py-20 bg-zion-blue-dark">
=======
      {/* Main Content */}
      <section className="py-20">
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">Send Us a Message</h2>
                <p className="text-zion-slate-light text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-200">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Department *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    >
                      {departments.map((dept) => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                      placeholder="Enter message subject"
                    />
                  </div>

                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

            {/* Office Information */}
=======
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Message sent successfully! We'll get back to you soon.
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
                >
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Something went wrong. Please try again.
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-zion-slate-light mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-zion-slate-light mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-light mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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
            </motion.div>

            {/* Contact Information */}
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">Office Information</h2>
                <p className="text-zion-slate-light text-lg">
                  Visit our headquarters or learn more about our operations.
                </p>
              </div>

              <div className="space-y-8">
                {/* Address */}
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Headquarters</h3>
                      <p className="text-zion-slate-light leading-relaxed">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-pink rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                      <div className="space-y-2">
                        {officeHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between text-zion-slate-light">
                            <span>{schedule.day}</span>
                            <span className="font-medium">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Stats */}
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-green to-zion-emerald rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Company Overview</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-zion-cyan">150+</div>
                          <div className="text-sm text-zion-slate-light">Team Members</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-zion-purple">25+</div>
                          <div className="text-sm text-zion-slate-light">Countries Served</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-zion-green">500+</div>
                          <div className="text-sm text-zion-slate-light">Projects Completed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-zion-emerald">98%</div>
                          <div className="text-sm text-zion-slate-light">Client Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Other Ways to Connect
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore additional channels to get in touch with our team and stay updated.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
              <p className="text-zion-slate-light text-sm mb-6">Chat with our team in real-time during business hours</p>
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                Start Chat
              </button>
            </motion.div>

            <motion.div 
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Schedule a Call</h3>
              <p className="text-zion-slate-light text-sm mb-6">Book a time that works for you for a detailed discussion</p>
              <button className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-pink text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                Book Time
              </button>
            </motion.div>

            <motion.div 
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-emerald rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mailbox className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
              <p className="text-zion-slate-light text-sm mb-6">Stay updated with our latest insights and news</p>
              <button className="px-6 py-3 bg-gradient-to-r from-zion-green to-zion-emerald text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </motion.div>

            <motion.div 
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-yellow to-zion-orange rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Support Portal</h3>
              <p className="text-zion-slate-light text-sm mb-6">Access our knowledge base and submit support tickets</p>
              <button className="px-6 py-3 bg-gradient-to-r from-zion-yellow to-zion-orange text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                Visit Portal
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how Zion Tech Group can help transform your business with innovative AI and technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Consultation
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
=======
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-zion-slate-light mb-8">
                  Get in touch with our team of experts. We're here to help you transform your business 
                  with cutting-edge technology solutions.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-zion-cyan font-medium mb-1">{info.details}</p>
                      <p className="text-zion-slate-light text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-zion-slate-dark/30 rounded-xl p-6 border border-zion-slate/20">
                <h3 className="text-lg font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0" />
                    <span>Expert team with 15+ years of experience</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0" />
                    <span>Cutting-edge AI and quantum technology</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0" />
                    <span>Global presence in 50+ countries</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0" />
                    <span>24/7 support and maintenance</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
=======
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            toast({
                title: "Form Validation Error",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
            return;
        }
        setErrors({});
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: "Message Sent",
                description: "We've received your message and will get back to you soon.",
            });
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 1500);
    };
    const offices = [
        {
            name: "Headquarters",
            address: "123 Tech Avenue, San Francisco, CA 94105",
            phone: "+1 302 464 0950",
            email: "commercial@ziontechgroup.com"
        },
        {
            name: "East Coast Office",
            address: "456 Innovation Street, New York, NY 10001",
            phone: "+1 302 464 0950",
            email: "commercial@ziontechgroup.com"
        }
    ];
    return (
<>
            <SEO 
                title="Contact Zion - Get in Touch" 
                description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform." 
                keywords="contact Zion, AI marketplace support, tech platform contact" 
                canonical="https://ziontechgroup.com/contact" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Get in
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Touch</span>
                        </h1>
                        <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
                            Have questions or want to learn more? We'd love to hear from you.
                        </p>
                    </div>
                    {/* Contact Form and Office Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                            <p className="text-zion-slate-light text-lg mb-8">
                                Whether you have a question about our platform, pricing, or anything else, 
                                our team is ready to answer all your questions.
                            </p>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-white mb-2">
                                            Your Name *
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`bg-zion-blue-dark border-zion-blue-light text-white ${
                                                errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''
                                            }`}
                                            placeholder="John Doe"
                                            required
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-white mb-2">
                                            Email Address *
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`bg-zion-blue-dark border-zion-blue-light text-white ${
                                                errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''
                                            }`}
                                            placeholder="john@example.com"
                                            required
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                        )}
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-white mb-2">
                                        Subject *
                                    </label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`bg-zion-blue-dark border-zion-blue-light text-white ${
                                            errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''
                                        }`}
                                        placeholder="How can we help you?"
                                        required
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                                    )}
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-white mb-2">
                                        Message *
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px] ${
                                            errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''
                                        }`}
                                        placeholder="Tell us what you'd like to know..."
                                        required
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                    )}
                                </div>
                                
                                <Button 
                                    type="submit" 
                                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
<>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Sending...
</>
                                    ) : (
<>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
</>
                                    )}
                                </Button>
                            </form>
                        </div>
                        {/* Office Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
                            <div className="grid grid-cols-1 gap-6">
                                {offices.map((office, index) => (
                                    <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light p-6">
                                        <CardContent className="p-0">
                                            <h3 className="text-xl font-bold text-white mb-3">{office.name}</h3>
                                            <div className="space-y-3">
                                                <div className="flex items-start">
                                                    <MapPin className="w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                                                    <span className="text-zion-slate-light">{office.address}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Phone className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                                                    <span className="text-zion-slate-light">{office.phone}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                                                    <a 
                                                        href={`mailto:${office.email}`} 
                                                        className="text-zion-cyan hover:underline"
                                                    >
                                                        {office.email}
                                                    </a>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            {/* Map */}
                            <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">
                                <div className="w-full h-64 bg-zion-blue-light flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                                        <p className="text-zion-slate-light">Interactive Map</p>
                                        <p className="text-sm text-zion-slate-light">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                            {/* AI Support Card */}
                            <div className="mt-8">
                                <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6">
                                    <CardContent className="p-0">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-zion-purple/20 p-3 rounded-full mr-4">
                                                <MessageSquare className="h-6 w-6 text-zion-purple" />
                                            </div>
                                            <div>
                                                <h3 className="text-white text-lg font-bold">Live AI Support</h3>
                                                <p className="text-zion-slate-light">Get instant answers to your questions</p>
                                            </div>
                                        </div>
                                        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                                            Chat With Our AI Assistant
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Need immediate assistance?</h2>
                        <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
                            Our customer support team is available 24/7 to help you with any questions.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                                <MessageSquare className="mr-2 h-5 w-5" />
                                Chat With AI
                            </Button>
                            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" asChild>
                                <a href="mailto:support@ziontechgroup.com">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Email Support
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
</>
    );
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
=======
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
}
