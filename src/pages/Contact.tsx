import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
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
    'AI Services',
    'Cybersecurity',
    'Cloud Migration',
    'DevOps & SRE',
    'Mobile Development',
    'Data Analytics',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your business? Get in touch with our team of experts. 
              We're here to help you succeed with cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
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
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-8">
                  We're here to help you succeed. Reach out to us through any of the channels below, 
                  and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+1 302 464 0950</p>
                    <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                    <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-gray-300">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                    <p className="text-sm text-gray-400">United States</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Free initial consultation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Customized solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    24/7 support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Proven track record
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait to transform your business. Contact us today and let's discuss 
            how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore Our Services
            </Link>
            <Link
              to="/pricing"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;