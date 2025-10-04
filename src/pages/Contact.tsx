import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Contact Zion Tech Group for revolutionary AI and IT solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Contact Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge AI and technology solutions? 
              Get in touch with our experts today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">🌐</div>
                    <div>
                      <h3 className="text-white font-semibold">Website</h3>
                      <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                        ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="text-white font-semibold">Address</h3>
                      <p className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Overview */}
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6">Our Services</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2">Micro SAAS</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• AI Analytics Dashboard</li>
                      <li>• Document Processing</li>
                      <li>• Lead Scoring</li>
                      <li>• Email Automation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">IT Services</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Cloud Migration</li>
                      <li>• DevOps Automation</li>
                      <li>• Database Optimization</li>
                      <li>• Infrastructure Monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">AI Solutions</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Machine Learning</li>
                      <li>• Computer Vision</li>
                      <li>• NLP Solutions</li>
                      <li>• Predictive Analytics</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Consulting</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Enterprise AI Strategy</li>
                      <li>• Digital Transformation</li>
                      <li>• Cybersecurity</li>
                      <li>• Quantum Computing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">Service Interest</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="micro-saas">Micro SAAS Solutions</option>
                    <option value="it-services">IT Services</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Tell us about your project and requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Pricing Information */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Competitive Pricing</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Micro SAAS</h3>
                  <p className="text-3xl font-bold text-green-400 mb-2">$99 - $399/month</p>
                  <p className="text-gray-300">Affordable monthly subscriptions for small to medium businesses</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">IT Services</h3>
                  <p className="text-3xl font-bold text-green-400 mb-2">$1,500 - $5,000</p>
                  <p className="text-gray-300">Project-based pricing with transparent cost structure</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">AI Solutions</h3>
                  <p className="text-3xl font-bold text-green-400 mb-2">$5,000 - $20,000+</p>
                  <p className="text-gray-300">Custom AI development with enterprise-grade solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;