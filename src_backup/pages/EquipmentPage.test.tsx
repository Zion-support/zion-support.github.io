import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_CATEGORIES } from '@/data/servicesData';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [selectedService, setSelectedService] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    const mailtoLink = `mailto:kleber@ziontechgroup.com?subject=Service Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0ABudget: ${formData.budget}%0D%0ATimeline: ${formData.timeline}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-50 to-gray-100&quot;>
      {/* Hero Section */}
      <div className=&quot;bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4 py-20&quot;>
          <div className=&quot;text-center max-w-4xl mx-auto&quot;>
            <h1 className=&quot;text-5xl font-bold mb-6&quot;>
              Get in Touch
            </h1>
            <p className=&quot;text-xl mb-8 text-blue-100&quot;>
              Ready to transform your business? Let's discuss how Zion Tech Group can help you achieve your goals.
            </p>
            <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
              <a 
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors&quot;
              >
                📞 Call Now: +1 302 464 0950
              </Link>
              <a 
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors&quot;
              >
                ✉️ Email Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className=&quot;bg-white border-b shadow-sm&quot;>
        <div className=&quot;container mx-auto px-4 py-4&quot;>
          <div className=&quot;flex flex-wrap justify-center items-center gap-8 text-gray-600&quot;>
            <div className=&quot;flex items-center gap-2&quot;>
              <span className=&quot;text-blue-600&quot;>📍</span>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <span className=&quot;text-blue-600&quot;>📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <span className=&quot;text-blue-600&quot;>✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <span className=&quot;text-blue-600&quot;>🌐</span>
              <a href=&quot;https://ziontechgroup.com&quot; className=&quot;text-blue-600 hover:underline&quot;>
                ziontechgroup.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=&quot;container mx-auto px-4 py-16&quot;>
        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16&quot;>
          {/* Contact Form */}
          <div className=&quot;bg-white rounded-xl shadow-lg p-8&quot;>
            <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Send Us a Message</h2>
            <p className=&quot;text-gray-600 mb-8&quot;>
              Fill out the form below and we'll get back to you within 24 hours to discuss your project requirements.
            </p>
            
            <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                <div>
                  <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                    Full Name *
                  </label>
                  <input
                    type=&quot;text&quot;
                    id=&quot;name&quot;
                    name=&quot;name&quot;
                    required
                    value={formData.name}
                    onChange={handleInputChange}
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
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                    placeholder=&quot;your.email@company.com&quot;
                  />
                </div>
              </div>
              
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                <div>
                  <label htmlFor=&quot;company&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                    Company Name
                  </label>
                  <input
                    type=&quot;text&quot;
                    id=&quot;company&quot;
                    name=&quot;company&quot;
                    value={formData.company}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                    placeholder=&quot;+1 (555) 123-4567&quot;
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor=&quot;service&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                  Service of Interest *
                </label>
                <select
                  id=&quot;service&quot;
                  name=&quot;service&quot;
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                >
                  <option value="&quot;>Select a service</option>
                  {SERVICE_CATEGORIES.map((category) => (
                    <optgroup key={category.id} label={category.name}>
                      {category.id === 'ai-services' && (
                        <>
                          <option value=&quot;ai-customer-service&quot;>AI Customer Service Automation</option>
                          <option value=&quot;ai-content-generation&quot;>AI Content Generation Suite</option>
                          <option value=&quot;ai-data-analytics&quot;>AI-Powered Business Intelligence</option>
                        </>
                      )}
                      {category.id === 'it-services' && (
                        <>
                          <option value=&quot;onsite-it-support&quot;>Onsite IT Support & Infrastructure</option>
                          <option value=&quot;cloud-migration&quot;>Cloud Migration & Optimization</option>
                        </>
                      )}
                      {category.id === 'micro-saas' && (
                        <>
                          <option value=&quot;project-management-saas&quot;>Smart Project Management Platform</option>
                          <option value=&quot;crm-saas&quot;>AI-Powered CRM System</option>
                          <option value=&quot;hr-management-saas&quot;>HR Management & Talent Platform</option>
                        </>
                      )}
                      {category.id === 'cybersecurity' && (
                        <>
                          <option value=&quot;security-audit&quot;>Security Audit & Penetration Testing</option>
                        </>
                      )}
                      {category.id === 'data-analytics' && (
                        <>
                          <option value=&quot;business-intelligence&quot;>Advanced Business Intelligence Platform</option>
                        </>
                      )}
                      {category.id === 'cloud-solutions' && (
                        <>
                          <option value=&quot;devops-automation">DevOps Automation & CI/CD Pipeline</option>
                        </>
                      )}
                    </optgroup>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                <div>
                  <label htmlFor=&quot;budget" className="block text-sm font-medium text-gray-700 mb-2&quot;>
                    Budget Range
                  </label>
                  <select
                    id=&quot;budget&quot;
                    name=&quot;budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                  >
                    <option value="&quot;>Select budget range</option>
                    <option value=&quot;under-5k&quot;>Under $5,000</option>
                    <option value=&quot;5k-25k&quot;>$5,000 - $25,000</option>
                    <option value=&quot;25k-100k&quot;>$25,000 - $100,000</option>
                    <option value=&quot;100k-500k&quot;>$100,000 - $500,000</option>
                    <option value=&quot;over-500k&quot;>Over $500,000</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor=&quot;timeline&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                    Project Timeline
                  </label>
                  <select
                    id=&quot;timeline&quot;
                    name=&quot;timeline&quot;
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                  >
                    <option value="&quot;>Select timeline</option>
                    <option value=&quot;asap&quot;>ASAP</option>
                    <option value=&quot;1-3-months&quot;>1-3 months</option>
                    <option value=&quot;3-6-months&quot;>3-6 months</option>
                    <option value=&quot;6-12-months&quot;>6-12 months</option>
                    <option value=&quot;over-12-months&quot;>Over 12 months</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor=&quot;message" className="block text-sm font-medium text-gray-700 mb-2&quot;>
                  Project Details *
                </label>
                <textarea
                  id=&quot;message&quot;
                  name=&quot;message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                  placeholder=&quot;Tell us about your project, goals, and requirements...&quot;
                />
              </div>
              
              <button
                type=&quot;submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                ✉️ Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+13024640950" className="text-blue-600 hover:underline text-lg">
                      +1 302 464 0950
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline text-lg">
                      kleber@ziontechgroup.com
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-xl">🌐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Website</p>
                    <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline text-lg">
                      ziontechgroup.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold">9:00 AM - 2:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-green-600">24/7 Emergency Support</span> available for critical issues
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="tel:+13024640950"
                  className="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                >
                  📞 Call Now
                </Link>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="block w-full bg-green-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-green-700 transition-colors&quot;
                >
                  ✉️ Send Email
                </Link>
                <Link
                  to=&quot;/services"
                  className="block w-full bg-purple-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-purple-700 transition-colors"
                >
                  🚀 View Services
                </Link>
                <a
                  href="https://ziontechgroup.com"
                  className="block w-full bg-gray-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-gray-700 transition-colors"
                >
                  🌐 Visit Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Don't wait to transform your business. Contact us today for a free consultation and discover how our innovative solutions can drive your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              📞 Call +1 302 464 0950
            </Link>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
            >
              ✉️ Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}