<<<<<<< HEAD:temp-broken/contact/page.tsx
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
=======
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc:app/contact/page.tsx
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value;
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI solutions, cybersecurity, and digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with our AI and IT solutions? 
              Get in touch with our expert team today.
            </p>
          </div>

<<<<<<< HEAD:temp-broken/contact/page.tsx
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
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-400 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-purple-400 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-gray-300">+1-302-464-0950</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-400 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <p className="text-gray-300">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc:app/contact/page.tsx
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
<<<<<<< HEAD:temp-broken/contact/page.tsx
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address;
=======
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc:app/contact/page.tsx
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
<<<<<<< HEAD:temp-broken/contact/page.tsx
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company;
=======
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc:app/contact/page.tsx
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
<<<<<<< HEAD:temp-broken/contact/page.tsx
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message;
=======
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc:app/contact/page.tsx
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
<<<<<<< HEAD:temp-broken/contact/page.tsx
                    required;
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or how we can help..."
=======
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Tell us about your project or requirements"
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc:app/contact/page.tsx
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
<<<<<<< HEAD:temp-broken/contact/page.tsx

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
=======
          </div>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc:app/contact/page.tsx
  );
  );
  );
};

export default ContactPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-9706:temp-broken/contact/page.tsx
