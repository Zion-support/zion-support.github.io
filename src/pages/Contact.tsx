import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Building,
  Globe,
  Users,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Code,
  Building2,
  Heart,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ExternalLink
} from 'lucide-react';

interface ContactMethod {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  primary: string;
  secondary?: string;
  action: string;
  href: string;
  color: string;
}

interface OfficeLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: [number, number];
  icon: React.ComponentType<{ className?: string }>;
}

const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    title: 'Email Support',
    description: 'Get in touch with our support team for general inquiries and assistance',
    icon: Mail,
    primary: 'support@ziontechgroup.com',
    secondary: 'General inquiries and support',
    action: 'Send Email',
    href: 'mailto:support@ziontechgroup.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'phone',
    title: 'Phone Support',
    description: 'Speak directly with our team for immediate assistance',
    icon: Phone,
    primary: '+1 302 464 0950',
    secondary: 'Monday - Friday, 9:00 AM - 6:00 PM EST',
    action: 'Call Now',
    href: 'tel:+13024640950',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'sales',
    title: 'Sales Inquiries',
    description: 'Contact our sales team for business opportunities and partnerships',
    icon: Building2,
    primary: 'sales@ziontechgroup.com',
    secondary: 'Business development and partnerships',
    action: 'Contact Sales',
    href: 'mailto:sales@ziontechgroup.com',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'technical',
    title: 'Technical Support',
    description: 'Get technical assistance for platform and service issues',
    icon: Code,
    primary: 'tech@ziontechgroup.com',
    secondary: 'Platform and technical support',
    action: 'Get Help',
    href: 'mailto:tech@ziontechgroup.com',
    color: 'from-orange-500 to-red-500'
  }
];

const officeLocations: OfficeLocation[] = [
  {
    id: 'headquarters',
    name: 'Zion Tech Group Headquarters',
    address: '364 E Main St STE 1008',
    city: 'Middletown',
    state: 'DE',
    zip: '19709',
    country: 'United States',
    phone: '+1 302 464 0950',
    email: 'info@ziontechgroup.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    coordinates: [39.4496, -75.7163],
    icon: Building
  },
  {
    id: 'west-coast',
    name: 'West Coast Office',
    address: '123 Innovation Drive',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    country: 'United States',
    phone: '+1 415 555 0123',
    email: 'westcoast@ziontechgroup.com',
    hours: 'Monday - Friday: 8:00 AM - 5:00 PM PST',
    coordinates: [37.7749, -122.4194],
    icon: Zap
  },
  {
    id: 'europe',
    name: 'European Office',
    address: '456 Tech Boulevard',
    city: 'London',
    state: '',
    zip: 'EC1A 1BB',
    country: 'United Kingdom',
    phone: '+44 20 7123 4567',
    email: 'europe@ziontechgroup.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM GMT',
    coordinates: [51.5074, -0.1278],
    icon: Globe
  }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/ziontechgroup',
    icon: Linkedin,
    color: 'hover:text-blue-500'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/ziontechgroup',
    icon: Twitter,
    color: 'hover:text-sky-500'
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/ziontechgroup',
    icon: Facebook,
    color: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/ziontechgroup',
    icon: Instagram,
    color: 'hover:text-pink-500'
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@ziontechgroup',
    icon: Youtube,
    color: 'hover:text-red-500'
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
    contactMethod: 'email',
    newsletter: false
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real implementation, this would send the data to your backend
    console.log('Form submitted:', formData);
    
    setFormStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        contactMethod: 'email',
        newsletter: false
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        </div>

        <div className="container-responsive relative z-10 py-20">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl font-bold text-gradient">Contact Us</h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8">
              Get in touch with our team. We're here to help you succeed with AI and technology solutions.
            </p>
            
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-zion-cyan mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Response Time: Within 24 hours</span>
              </div>
              <p className="text-zion-slate-light text-sm">
                Our team is available to assist you with any questions or support needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="container-responsive py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">How Can We Help You?</h2>
            <p className="text-zion-slate-light text-lg">
              Choose the best way to get in touch with our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{method.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="text-white font-medium">{method.primary}</div>
                  {method.secondary && (
                    <div className="text-zion-slate-light text-sm">{method.secondary}</div>
                  )}
                </div>
                
                <a
                  href={method.href}
                  className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${method.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                >
                  {method.action}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and Office Locations */}
      <div className="container-responsive py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <p className="text-zion-slate-light mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                All fields marked with * are required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-xl text-white focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-zion-cyan bg-white/5 border-zion-cyan/20 rounded focus:ring-zion-cyan focus:ring-2"
                  />
                  <label htmlFor="newsletter" className="text-sm text-zion-slate-light">
                    Subscribe to our newsletter for updates and insights
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/80 hover:to-zion-purple/80 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Form Status Messages */}
                {formStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400">There was an error sending your message. Please try again.</span>
                  </div>
                )}
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
              <p className="text-zion-slate-light mb-8">
                Visit us at one of our office locations around the world.
              </p>

              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div
                    key={office.id}
                    className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                        <office.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{office.name}</h3>
                        
                        <div className="space-y-2 text-sm text-zion-slate-light">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                            <span>
                              {office.address}, {office.city}, {office.state} {office.zip}, {office.country}
                            </span>
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
                            <span>{office.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Media and Additional Info */}
      <div className="container-responsive py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Connect With Us</h2>
            <p className="text-zion-slate-light mb-8">
              Follow us on social media for the latest updates, insights, and industry news.
            </p>

            {/* Social Media Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/5 border border-zion-cyan/20 rounded-xl flex items-center justify-center text-zion-slate-light ${social.color} transition-all duration-300 hover:border-zion-cyan/40 hover:bg-white/10`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Additional Contact Information */}
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Need Immediate Assistance?</h3>
              <p className="text-zion-slate-light mb-6">
                For urgent matters or technical emergencies, please contact our 24/7 support line.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-semibold">Emergency Support</div>
                  <div className="text-zion-slate-light text-sm">+1 302 464 0950</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-semibold">Live Chat</div>
                  <div className="text-zion-slate-light text-sm">Available 24/7</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-semibold">Priority Support</div>
                  <div className="text-zion-slate-light text-sm">priority@ziontechgroup.com</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
