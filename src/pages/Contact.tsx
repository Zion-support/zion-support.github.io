import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Globe, 
  Building, 
  Users,
  CheckCircle,
  ArrowRight,
  Send,
  Calendar,
  Video,
  FileText,
  Star
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: '',
        preferredContact: 'email'
      });
    }, 5000);
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const supportOptions = [
    {
      title: 'General Inquiries',
      description: 'Questions about our services, pricing, or company',
      icon: MessageCircle,
      response: 'Within 24 hours',
      contact: 'info@ziontechgroup.com'
    },
    {
      title: 'Technical Support',
      description: 'Help with existing services or technical issues',
      icon: Users,
      response: 'Within 4 hours',
      contact: 'support@ziontechgroup.com'
    },
    {
      title: 'Sales & Partnerships',
      description: 'New business opportunities and partnership discussions',
      icon: Building,
      response: 'Within 2 hours',
      contact: 'sales@ziontechgroup.com'
    },
    {
      title: 'Emergency Support',
      description: 'Critical system issues requiring immediate attention',
      icon: Clock,
      response: 'Within 1 hour',
      contact: '+1 302 464 0950'
    }
  ];

  const services = [
    'AI Business Intelligence',
    'AI Healthcare Analytics',
    'AI Cybersecurity Suite',
    'Cloud DevOps',
    'Digital Twin Platform',
    'IoT Edge Computing',
    'Quantum Computing',
    'Micro SaaS Solutions',
    'Custom Development',
    'Other (Please specify)'
  ];

  const budgets = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Not sure yet'
  ];

  const timelines = [
    'Immediate (Within 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Not sure yet'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to transform your business? Let's discuss how our AI-powered solutions 
              and technology services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              {submitSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-300">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Service of Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget, index) => (
                          <option key={index} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your project, requirements, or questions..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="text-cyan-500 focus:ring-cyan-500"
                        />
                        <span className="text-slate-300">Email</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="text-cyan-500 focus:ring-cyan-500"
                        />
                        <span className="text-slate-300">Phone</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                      <p className="text-slate-300">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Website</h3>
                      <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        {contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-slate-300">{schedule.day}</span>
                      <span className="text-white font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="/request-quote"
                    className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors group"
                  >
                    <FileText className="w-5 h-5 text-cyan-400" />
                    <span className="text-white group-hover:text-cyan-400 transition-colors">Request a Quote</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 ml-auto" />
                  </a>
                  <a
                    href="/demo"
                    className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors group"
                  >
                    <Video className="w-5 h-5 text-cyan-400" />
                    <span className="text-white group-hover:text-cyan-400 transition-colors">Schedule a Demo</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 ml-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How Can We Help?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the right contact method based on your needs and get the fastest response
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl w-fit mb-4">
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-slate-300 mb-4">{option.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-400">Response: {option.response}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MessageCircle className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400">{option.contact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-3xl p-12 text-center border border-cyan-500/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your business. Contact us today and let's discuss 
              how we can help you achieve your technology goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-slate-300">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>Trusted by 500+ businesses worldwide</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
