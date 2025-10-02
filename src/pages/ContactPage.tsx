import React, { useState } from 'react';
import {
Helmet
} from 'react-helmet-async';
import EnhancedContactForm from '../components/EnhancedContactForm';
const ContactPage: React.FC = () => {,
  const [formData, setFormData] = useState({
    name: '',',
    email: '',',
    company: '',',
    phone: '',',
    service: '',',
    message: '});
=======
import React, { useState } from 'react';';
import { Helmet } from 'react-helmet-async';';
import EnhancedContactForm from '../components/EnhancedContactForm';';

const ContactPage: React.FC = () => {,
  const [formData, setFormData] = useState({
    name: '',';,
    email: '',';,
    company: '',';,
    phone: '',';,
    service: '',';,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {,
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted: ', formData);',
=======
    console.log('Form submitted: ', formData);';,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,
    setFormData({
      ...formData
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts for consultation and support." /></Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">",
=======
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts for consultation and support." />";
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">";
        <div className="max-w-6xl mx-auto">";
          <div className="text-center mb-12">";
            <h1 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">";,
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
              Ready to transform your business? Get in touch with our experts to discuss 
              your specific needs and discover how we can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12">",
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
=======
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12">";,
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>";
              
              <div className="space-y-6">";
                <div className="flex items-start">";
                  <div className="text-2xl mr-4">📧</div>";
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>";
                    <p className="text-gray-600">info@ziontechgroup.com</p>";
                    <p className="text-gray-600">support@ziontechgroup.com</p>";
                  </div>
                </div>

                <div className="flex items-start">";
                  <div className="text-2xl mr-4">📞</div>";
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri: 9AM-6PM EST</p>",
=======
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>";
                    <p className="text-gray-600">+1 (555) 123-4567</p>";
                    <p className="text-gray-600">Mon-Fri: 9AM-6PM EST</p>";,
                  </div>
                </div>

                <div className="flex items-start">";
                  <div className="text-2xl mr-4">📍</div>";
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>";
                    <p className="text-gray-600">";
                      123 Technology Drive<br />
                      Innovation District<br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">";
                  <div className="text-2xl mr-4">⏰</div>";
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>",
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>",
                    <p className="text-gray-600">Sunday: Closed</p>",
=======
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>";
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>";,
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>";,
                    <p className="text-gray-600">Sunday: Closed</p>";,
                  </div>
                </div>
              </div>

              {/* Services Quick Links */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>
                <div className="grid grid-cols-1 sm: grid-cols-2 gap-4">",
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">AI Solutions</h4>
                    <p className="text-gray-600 text-sm">Machine Learning & Automation</p>
=======
              <div className="mt-12">";
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>";
                <div className="grid grid-cols-1 sm: grid-cols-2 gap-4">";,
                  <div className="bg-blue-50 p-4 rounded-lg">";
                    <h4 className="font-bold text-gray-900 mb-2">AI Solutions</h4>";
                    <p className="text-gray-600 text-sm">Machine Learning & Automation</p>";
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">";
                    <h4 className="font-bold text-gray-900 mb-2">Cloud Computing</h4>";
                    <p className="text-gray-600 text-sm">Migration & Infrastructure</p>";
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">";
                    <h4 className="font-bold text-gray-900 mb-2">Digital Transformation</h4>";
                    <p className="text-gray-600 text-sm">Process Optimization</p>";
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">";
                    <h4 className="font-bold text-gray-900 mb-2">Cybersecurity</h4>";
                    <p className="text-gray-600 text-sm">Protection & Compliance</p>";
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>";
              <EnhancedContactForm />
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">";
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">";
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8">",
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
=======
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8">";,
              <div className="bg-white p-6 rounded-lg shadow-md">";
                <h3 className="text-xl font-bold text-gray-900 mb-3">";
                  How long does a typical project take?
                </h3>
                <p className="text-gray-600">";
                  Project timelines vary based on complexity and scope. Simple implementations 
                  can take 2-4 weeks, while comprehensive digital transformations may take 
                  3-6 months.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">";
                <h3 className="text-xl font-bold text-gray-900 mb-3">";
                  Do you provide ongoing support?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer comprehensive support packages including maintenance
=======
                <p className="text-gray-600">";
                  Yes, we offer comprehensive support packages including maintenance, 
                  updates, and 24/7 technical assistance for critical systems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">";
                <h3 className="text-xl font-bold text-gray-900 mb-3">";
                  What industries do you serve?
                </h3>
                <p className="text-gray-600">
                  We serve clients across various industries including healthcare
=======
                <p className="text-gray-600">";
                  We serve clients across various industries including healthcare, 
                  finance, manufacturing, retail, and technology sectors.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">";
                <h3 className="text-xl font-bold text-gray-900 mb-3">";
                  Do you offer custom solutions?
                </h3>
                <p className="text-gray-600">";
                  Absolutely. We specialize in creating tailored solutions that meet 
                  your specific business requirements and objectives.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;