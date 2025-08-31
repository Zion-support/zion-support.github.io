import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Globe,
  Building
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@ziontechgroup.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      value: "San Francisco, CA",
      description: "Visit our headquarters"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Support Hours",
      value: "24/7 Available",
      description: "Round-the-clock assistance"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      country: "United States",
      address: "123 Innovation Drive, Suite 100",
      phone: "+1 (555) 123-4567",
      email: "sf@ziontechgroup.com"
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
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                Get in Touch
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Let's Build Something
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Amazing Together
                </span>
              </h1>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
                Ready to transform your business with AI and advanced technology? 
                Our team of experts is here to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="ai-solutions">AI Solutions Inquiry</option>
                      <option value="consulting">Technology Consulting</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-cyan-400 font-medium mb-1">{info.value}</p>
                        <p className="text-zinc-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Need Immediate Help?</h3>
                  <div className="space-y-3">
                    <button className="w-full px-4 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors text-left">
                      <div className="flex items-center justify-between">
                        <span>Schedule a Demo</span>
                        <span className="text-cyan-400">→</span>
                      </div>
                    </button>
                    <button className="w-full px-4 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors text-left">
                      <div className="flex items-center justify-between">
                        <span>Get a Quote</span>
                        <span className="text-cyan-400">→</span>
                      </div>
                    </button>
                    <button className="w-full px-4 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors text-left">
                      <div className="flex items-center justify-between">
                        <span>Book a Consultation</span>
                        <span className="text-cyan-400">→</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Offices Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Global Presence
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                We're here to serve you wherever you are in the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-zinc-300">
                Quick answers to common questions about working with us.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">How quickly can you respond to inquiries?</h3>
                <p className="text-zinc-400">We typically respond to all inquiries within 24 hours during business days. For urgent matters, we offer priority support channels.</p>
              </div>
              
              <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer free consultations?</h3>
                <p className="text-zinc-400">Yes, we offer a complimentary 30-minute consultation to discuss your needs and explore how our solutions can help your business.</p>
              </div>
              
              <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">What industries do you specialize in?</h3>
                <p className="text-zinc-400">We serve clients across all industries, with particular expertise in healthcare, finance, manufacturing, retail, and technology sectors.</p>
              </div>
              
              <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Can you work with international clients?</h3>
                <p className="text-zinc-400">Absolutely! We have offices in multiple countries and serve clients globally with localized support and compliance expertise.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
