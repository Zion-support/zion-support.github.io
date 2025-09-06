import React, { useState } from 'react';

import Button from '../components/Button';
import Card from '../components/Card';

const Contact: React.FC = () => {

import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your message. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *

                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}

                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}

                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">

                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}

                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}

                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}

                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="it-services">IT Services</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="digital-transformation">Digital Transformation</option>

                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}

                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
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

        </div>
      </div>
    </div>

  );
};

