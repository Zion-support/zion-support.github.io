import React from 'react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Page</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
<<<<<<< HEAD:app/contact/page.tsx
    </div>
  );
}
=======
=======
'use client';
import React, { useState } from 'react';
import React, { Helmet } from 'react-helmet-async';
import React, { Phone, Mail, MapPin, Send } from 'lucide-react';
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Innovation City',
      description: 'NY 10001, United States'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Contact us for AI and IT solutions, consultations, and support." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">"
        <div className="max-w-7xl mx-auto text-center">"
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Us;
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with AI and IT solutions? 
            Get in touch with our experts today.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4">"
        <div className="max-w-7xl mx-auto">"
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>"
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name;
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address;
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company;
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message;
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required;
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>"
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">"
                    <div className="flex-shrink-0">"
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">"
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-4">"
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>"
                      <p className="text-gray-900 font-medium">{info.details}</p>"
                      <p className="text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">"
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Hours</h3>"
                <div className="space-y-1 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gray-50">"
        <div className="max-w-7xl mx-auto">"
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Visit Our Office;
          </h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">"
            <p className="text-gray-500 text-lg">Interactive Map Coming Soon</p>
          </div>
        </div>
      </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
    </div>
  );
  );
  );
};

export default ContactPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-9706:temp-broken/contact/page.tsx
