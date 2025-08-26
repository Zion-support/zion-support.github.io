import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Globe, 
  Building,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@ziontechgroup.com', 'support@ziontechgroup.com'],
      action: 'mailto:info@ziontechgroup.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (302) 464-0950', '+1 (800) ZION-TECH'],
      action: 'tel:+13024640950'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Innovation Drive', 'Wilmington, DE 19801', 'United States'],
      action: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM EST', 'Sat: 10:00 AM - 2:00 PM EST', 'Sun: Closed'],
      action: '#'
    }
  ];

  const services = [
    'AI Solutions & Machine Learning',
    'Cloud & DevOps Services',
    'Cybersecurity & Compliance',
    'Digital Transformation',
    'IT Infrastructure',
    'Quantum Computing',
    'Blockchain Solutions',
    'IoT & Data Analytics',
    'Custom Software Development',
    'Consulting & Strategy'
  ];

  const offices = [
    {
      city: 'Wilmington, DE',
      country: 'United States',
      address: '123 Innovation Drive, Wilmington, DE 19801',
      phone: '+1 (302) 464-0950',
      email: 'us@ziontechgroup.com'
    },
    {
      city: 'London, UK',
      country: 'United Kingdom',
      address: '456 Tech Square, London, EC2A 4BX',
      phone: '+44 20 7946 0950',
      email: 'uk@ziontechgroup.com'
    },
    {
      city: 'Toronto, CA',
      country: 'Canada',
      address: '789 Innovation Blvd, Toronto, ON M5V 3A8',
      phone: '+1 (416) 555-0950',
      email: 'ca@ziontechgroup.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss how we can help 
            you achieve your digital transformation goals.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <info.icon className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                  ))}
                </div>
                {info.action !== '#' && (
                  <a
                    href={info.action}
                    className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Contact Now →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-green-300">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
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
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {office.city}, {office.country}
                        </h3>
                        <div className="space-y-2 text-gray-300">
                          <p className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                            {office.address}
                          </p>
                          <p className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-blue-400" />
                            {office.phone}
                          </p>
                          <p className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-blue-400" />
                            {office.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Contact Options */}
              <div className="mt-8 p-6 rounded-xl bg-white/5">
                <h3 className="text-xl font-semibold text-white mb-4">Other Ways to Connect</h3>
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com/company/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Follow us on LinkedIn
                  </a>
                  <a
                    href="mailto:careers@ziontechgroup.com"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    careers@ziontechgroup.com
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Emergency Support: +1 (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">What is your typical response time?</h3>
              <p className="text-gray-300">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, 
                you can call our emergency support line.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer free consultations?</h3>
              <p className="text-gray-300">
                Yes, we offer a free 30-minute consultation to discuss your project requirements and explore 
                how our solutions can benefit your business.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">What industries do you specialize in?</h3>
              <p className="text-gray-300">
                We serve clients across various industries including healthcare, finance, manufacturing, 
                retail, and technology. Our solutions are adaptable to any business sector.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-300">
                Absolutely! We offer comprehensive support packages including 24/7 monitoring, 
                regular maintenance, and continuous optimization of your solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
