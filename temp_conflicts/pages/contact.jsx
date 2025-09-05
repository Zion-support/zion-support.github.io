
import Head from 'next/head';
import { useState } from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: &quot;General Inquiries&quot;,
      email: &quot;info@ziontechgroup.com&quot;,
      phone: &quot;+1 (555) 123-4567&quot;
    },
    {
      title: &quot;Sales & Partnerships&quot;,
      email: &quot;sales@ziontechgroup.com&quot;,
      phone: &quot;+1 (555) 123-4568&quot;
    },
    {
      title: &quot;Technical Support&quot;,
      email: &quot;support@ziontechgroup.com&quot;,
      phone: &quot;+1 (555) 123-4569&quot;
    }
  ];

  const offices = [
    {
      city: &quot;San Francisco&quot;,
      address: &quot;123 Innovation Drive, San Francisco, CA 94105&quot;,
      phone: &quot;+1 (555) 123-4567&quot;
    },
    {
      city: &quot;New York&quot;,
      address: &quot;456 Tech Avenue, New York, NY 10001&quot;,
      phone: &quot;+1 (555) 123-4568&quot;
    },
    {
      city: &quot;London&quot;,
      address: &quot;789 Digital Street, London, UK EC1A 1BB&quot;,
      phone: &quot;+44 20 1234 5678&quot;
    }
  ];

  return (
    <EnhancedLayout>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Get in touch with Zion Tech Group. Contact us for technology solutions, partnerships, or general inquiries. We're here to help transform your business.&quot; />
      </Head>
      
      <main className=&quot;container mx-auto px-4 py-16&quot;>
        {/* Hero Section */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-4xl font-bold text-gray-900 mb-6&quot;>
            Get in Touch
          </h1>
          <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
            Ready to transform your business with cutting-edge technology? 
            Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className=&quot;grid lg:grid-cols-2 gap-16&quot;>
          {/* Contact Form */}
          <div className=&quot;bg-white rounded-lg shadow-lg p-8&quot;>
            <h2 className=&quot;text-2xl font-bold text-gray-900 mb-6&quot;>Send us a Message</h2>
            <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
              <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
                <div>
                  <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                    Full Name *
                  </label>
                  <input
                    type=&quot;text&quot;
                    id=&quot;name&quot;
                    name=&quot;name&quot;
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                    placeholder=&quot;Your full name&quot;
                  />
                </div>
                <div>
                  <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                    Email Address *
                  </label>
                  <input
                    type=&quot;email&quot;
                    id=&quot;email&quot;
                    name=&quot;email&quot;
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                    placeholder=&quot;your.email@company.com&quot;
                  />
                </div>
              </div>
              
              <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
                <div>
                  <label htmlFor=&quot;company&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                    Company
                  </label>
                  <input
                    type=&quot;text&quot;
                    id=&quot;company&quot;
                    name=&quot;company&quot;
                    value={formData.company}
                    onChange={handleChange}
                    className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                    placeholder=&quot;Your company name&quot;
                  />
                </div>
                <div>
                  <label htmlFor=&quot;phone&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                    Phone Number
                  </label>
                  <input
                    type=&quot;tel&quot;
                    id=&quot;phone&quot;
                    name=&quot;phone&quot;
                    value={formData.phone}
                    onChange={handleChange}
                    className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                    placeholder=&quot;+1 (555) 123-4567&quot;
                  />
                </div>
              </div>

              <div>
                <label htmlFor=&quot;service&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                  Service of Interest
                </label>
                <select
                  id=&quot;service&quot;
                  name=&quot;service&quot;
                  value={formData.service}
                  onChange={handleChange}
                  className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                >
                  <option value="&quot;>Select a service</option>
                  <option value=&quot;ai-development&quot;>AI Development</option>
                  <option value=&quot;cloud-services&quot;>Cloud Services</option>
                  <option value=&quot;blockchain&quot;>Blockchain Solutions</option>
                  <option value=&quot;web-development&quot;>Web Development</option>
                  <option value=&quot;mobile-development&quot;>Mobile Development</option>
                  <option value=&quot;data-analytics&quot;>Data Analytics</option>
                  <option value=&quot;consulting&quot;>Technology Consulting</option>
                  <option value=&quot;other&quot;>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor=&quot;message" className="block text-sm font-medium text-gray-700 mb-2&quot;>
                  Message *
                </label>
                <textarea
                  id=&quot;message&quot;
                  name=&quot;message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                  placeholder=&quot;Tell us about your project or how we can help...&quot;
                />
              </div>

              <button
                type=&quot;submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-blue-600 mb-1">{info.email}</p>
                    <p className="text-gray-600">{info.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h2>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{office.city}</h3>
                    <p className="text-gray-600 mb-1">{office.address}</p>
                    <p className="text-green-600">{office.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM PST</p>
                <p><span className="font-semibold">Saturday:</span> 10:00 AM - 2:00 PM PST</p>
                <p><span className="font-semibold">Sunday:</span> Closed</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Emergency support available 24/7 for existing clients
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 mb-6">
            Let's schedule a consultation to discuss your technology needs.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Call
          </button>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Contact;