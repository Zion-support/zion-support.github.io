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
  AlertCircle,
  Globe,
  Building,
  Users,
  Award,
  Shield,
  Zap,
  Star,
  ArrowRight,
  ExternalLink,
  Calendar,
  Video,
  FileText,
  Download
} from 'lucide-react';

interface ContactMethod {
  title: string;
  description: string;
  icon: any;
  value: string;
  action: string;
  color: string;
  link?: string;
}

interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  service: string;
  budget: string;
  timeline: string;
}

const contactMethods: ContactMethod[] = [
  {
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    icon: Phone,
    value: '+1 (302) 464-0950',
    action: 'Call Now',
    color: 'from-blue-500 to-cyan-500',
    link: 'tel:+13024640950'
  },
  {
    title: 'Email Support',
    description: 'Send detailed inquiries and get comprehensive responses',
    icon: Mail,
    value: 'info@ziontechgroup.com',
    action: 'Send Email',
    color: 'from-green-500 to-teal-500',
    link: 'mailto:info@ziontechgroup.com'
  },
  {
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    icon: MessageCircle,
    value: 'Available 24/7',
    action: 'Start Chat',
    color: 'from-purple-500 to-pink-500',
    link: '/chat'
  },
  {
    title: 'Office Location',
    description: 'Visit our headquarters for in-person meetings',
    icon: MapPin,
    value: 'Wilmington, DE, USA',
    action: 'Get Directions',
    color: 'from-orange-500 to-red-500',
    link: 'https://maps.google.com/?q=Wilmington,DE'
  }
];

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
  { day: 'Sunday', hours: 'Emergency Support Only' }
];

const services = [
  'AI & Machine Learning',
  'Cybersecurity',
  'Cloud & DevOps',
  'Quantum Computing',
  'IoT & Edge Computing',
  'Blockchain Solutions',
  'Digital Transformation',
  'Custom Software Development',
  'IT Consulting',
  'Other'
];

const budgets = [
  'Under $10,000',
  '$10,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000 - $500,000',
  '$500,000+'
];

const timelines = [
  'Immediate (1-2 weeks)',
  'Quick (1-2 months)',
  'Standard (3-6 months)',
  'Extended (6+ months)',
  'Flexible'
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
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    service: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
        subject: '',
        message: '',
        service: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent animate-gradient-x"
              variants={itemVariants}
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how we can help you achieve your goals.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <button className="btn-primary group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary group">
                Schedule a Call
                <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the communication method that works best for you. Our team is available through various channels to ensure you get the support you need.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="p-6 rounded-2xl bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{method.description}</p>
                <div className="text-lg font-semibold text-zion-cyan mb-4">{method.value}</div>
                {method.link ? (
                  <a
                    href={method.link}
                    className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 text-zion-cyan rounded-lg hover:bg-zion-cyan/20 transition-all duration-300 group-hover:scale-105"
                  >
                    {method.action}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                ) : (
                  <button className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 text-zion-cyan rounded-lg hover:bg-zion-cyan/20 transition-all duration-300 group-hover:scale-105">
                    {method.action}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-purple to-zion-blue bg-clip-text text-transparent">
                Tell Us About Your Project
              </h2>
              <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours. We'll discuss your requirements, provide a customized solution, and answer any questions you may have.
              </p>
              
              {/* Office Hours */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-zion-cyan" />
                  Office Hours
                </h3>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-zion-slate-light">
                      <span>{schedule.day}</span>
                      <span className="text-zion-cyan">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">Award-Winning Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">24/7 Support Available</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-zion-slate-dark/30 backdrop-blur-xl border border-zion-cyan/20">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-white font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-white font-medium mb-2">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget</option>
                      {budgets.map((budget, index) => (
                        <option key={index} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-white font-medium mb-2">Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-white font-medium mb-2">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-green-400">Thank you! We'll get back to you within 24 hours.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/40 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                    <span className="text-red-400">Something went wrong. Please try again.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending Message...
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
          </motion.div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-blue to-zion-cyan bg-clip-text text-transparent">
              More Ways to Connect
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore additional resources and contact options to get the most out of your relationship with Zion Tech Group.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="p-8 rounded-2xl bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Schedule a Demo</h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Book a personalized demonstration of our solutions to see how they can address your specific business needs.
              </p>
              <button className="btn-primary group">
                Book Demo
                <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Download Resources</h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Access whitepapers, case studies, and technical documentation to learn more about our capabilities.
              </p>
              <button className="btn-secondary group">
                Browse Resources
                <Download className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-zion-blue to-zion-purple rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Offices</h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Connect with our team members in different time zones for round-the-clock support and collaboration.
              </p>
              <button className="btn-secondary group">
                View Locations
                <MapPin className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Don't wait to transform your business. Contact us today and let's discuss how our innovative solutions can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary group">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary group">
                Learn More
                <FileText className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
