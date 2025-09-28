import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Users, Award, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact(): React.JSX.Element {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@ziontechgroup.com',
                        subtitle: 'We&apos;ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Tech Avenue, Suite 100',
      subtitle: 'San Francisco, CA 94105'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      details: '24/7 Emergency Support',
      subtitle: 'Enterprise clients only'
    }
  ];

  const services = [
    'AI Solutions',
    'Cloud Infrastructure',
    'Data Analytics',
    'Cybersecurity',
    'Software Development',
    'IT Consulting',
    'Other'
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '99%', label: 'Success Rate' },
    { icon: Globe, value: '50+', label: 'Countries Served' }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get expert consultation and support for your business needs." />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get in touch with our expert team" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Zion Tech Group" />
        <meta name="twitter:description" content="Get in touch with our expert team" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 border border-zion-cyan/30">
              <Send className="w-4 h-4 mr-2" />
              Get Expert Consultation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready to transform your business with AI and IT solutions? Get in touch with our expert team.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <stat.icon className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-zion-slate-light">Thank you for contacting us. We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-zion-slate-light mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-light mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-zion-slate-light mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    >
                      <option value="" className="bg-gray-800">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-gray-800">
                          {service}
                        </option>
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
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-zion-blue-light to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-zion-blue-light to-zion-purple-light rounded-lg flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                        <p className="text-zion-cyan font-medium">{info.details}</p>
                        <p className="text-zion-slate-light text-sm">{info.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span className="text-zion-slate-light">Expert team with 10+ years experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span className="text-zion-slate-light">24/7 support and monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span className="text-zion-slate-light">Custom solutions for your business</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span className="text-zion-slate-light">Proven track record of success</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span className="text-zion-slate-light">Competitive pricing and flexible terms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}