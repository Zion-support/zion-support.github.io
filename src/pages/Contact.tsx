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
import { SEOHead } from '../components/seo/SEOHead';

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
    color: 'from-zion-blue to-zion-cyan',
    link: 'tel:+13024640950'
  },
  {
    title: 'Email Support',
    description: 'Send detailed inquiries and get comprehensive responses',
    icon: Mail,
    value: 'kleber@ziontechgroup.com',
    action: 'Send Email',
    color: 'from-zion-cyan to-zion-green',
    link: 'mailto:kleber@ziontechgroup.com'
  },
  {
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    icon: MessageCircle,
    value: 'Available 24/7',
    action: 'Start Chat',
    color: 'from-zion-purple to-zion-pink',
    link: '/chat'
  },
  {
    title: 'Office Location',
    description: 'Visit our headquarters for in-person meetings',
    icon: MapPin,
    value: '364 E Main St STE 1008, Middletown DE 19709',
    action: 'Get Directions',
    color: 'from-zion-orange to-zion-red',
    link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008,+Middletown+DE+19709'
  }
];

const services = [
  { value: 'ai-ml', label: 'AI & Machine Learning' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'cloud-devops', label: 'Cloud & DevOps' },
  { value: 'digital-transformation', label: 'Digital Transformation' },
  { value: 'iot', label: 'IoT Services' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'consulting', label: 'Technology Consulting' },
  { value: 'other', label: 'Other' }
];

const budgets = [
  { value: 'under-50k', label: 'Under $50K' },
  { value: '50k-100k', label: '$50K - $100K' },
  { value: '100k-250k', label: '$100K - $250K' },
  { value: '250k-500k', label: '$250K - $500K' },
  { value: '500k-1m', label: '$500K - $1M' },
  { value: 'over-1m', label: 'Over $1M' }
];

const timelines = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-3-months', label: '1-3 Months' },
  { value: '3-6-months', label: '3-6 Months' },
  { value: '6-12-months', label: '6-12 Months' },
  { value: 'over-12-months', label: 'Over 12 Months' }
];

const Contact: React.FC = () => {
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
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

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
    setSubmitError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
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
      
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <>
      {/* SEO Head */}
      <SEOHead 
        title="Contact Us"
        description="Get in touch with Zion Tech Group for cutting-edge technology solutions. Our expert team is ready to help transform your business."
        keywords={['contact', 'support', 'consultation', 'technology solutions', 'AI services']}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Zion Tech Group",
          "description": "Get in touch with our technology experts",
          "url": "https://ziontechgroup.com/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "telephone": "+1-302-464-0950",
            "email": "kleber@ziontechgroup.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            }
          }
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-32 px-4 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/10 rounded-full blur-xl animate-float" />
            <div className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-40 left-20 w-20 h-20 bg-zion-blue/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Get in <span className="animate-gradient-x bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">Touch</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
              >
                Ready to transform your business with cutting-edge technology? Our expert team is here to help. 
                Let's discuss your project and explore how we can drive innovation together.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href="#contact-form"
                  className="btn-primary group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact-methods"
                  className="btn-secondary group"
                >
                  Contact Methods
                  <MessageCircle className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section id="contact-methods" className="py-20 bg-zion-slate">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                Multiple Ways to Connect
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Choose the method that works best for you. Our team is available 24/7 to support your needs.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">{method.description}</p>
                  <div className="text-lg font-semibold text-zion-cyan mb-4">{method.value}</div>
                  {method.link ? (
                    <a
                      href={method.link}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors group/link"
                    >
                      {method.action}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-zion-cyan">{method.action}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20 bg-zion-slate-dark">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Start Your Project
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Tell us about your project and we'll get back to you within 24 hours with a personalized solution.
              </motion.p>
            </motion.div>

            {/* Success/Error Messages */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 mb-8 text-center"
              >
                <div className="flex items-center justify-center space-x-3 text-green-400 mb-2">
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-lg font-semibold">Message Sent Successfully!</span>
                </div>
                <p className="text-green-300">We'll get back to you within 24 hours.</p>
              </motion.div>
            )}

            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 mb-8 text-center"
              >
                <div className="flex items-center justify-center space-x-3 text-red-400 mb-2">
                  <AlertCircle className="w-6 h-6" />
                  <span className="text-lg font-semibold">Error Sending Message</span>
                </div>
                <p className="text-red-300">{submitError}</p>
              </motion.div>
            )}

            <motion.form
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-zion-slate/20 rounded-2xl p-8 border border-zion-cyan/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all"
                    placeholder="Brief description of your project"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-white font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all"
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((budget) => (
                      <option key={budget.value} value={budget.value}>
                        {budget.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-white font-medium mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline.value} value={timeline.value}>
                        {timeline.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all resize-none"
                  placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="py-20 bg-zion-slate">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                We're not just another technology company. Here's what makes us different.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={itemVariants} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
                <p className="text-zion-slate-light">
                  Our team consists of industry experts with decades of combined experience in cutting-edge technologies.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Proven Track Record</h3>
                <p className="text-zion-slate-light">
                  We've successfully delivered 500+ projects across various industries with 99% client satisfaction.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Security & Reliability</h3>
                <p className="text-zion-slate-light">
                  We prioritize security and reliability in every solution, ensuring your business is protected.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zion-slate-dark">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Don't wait to transform your business. Contact us today and let's discuss how we can help you achieve your goals.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact-form"
                  className="btn-primary group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/services"
                  className="btn-secondary group"
                >
                  Explore Services
                  <Zap className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
