import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Globe, 
  CheckCircle,
  Star,
  Award,
  Users,
  Zap,
  Shield,
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  };

  const services = [
    "AI Customer Churn Prediction",
    "AI Financial Fraud Detection", 
    "AI Supply Chain Optimization",
    "AI Healthcare Diagnostics",
    "AI Content Creation Studio",
    "AI Predictive Maintenance",
    "AI Legal Document Analysis",
    "AI Real Estate Analytics",
    "AI Cybersecurity Threat Intelligence",
    "AI Personal Finance Advisor",
    "AI E-commerce Personalization",
    "AI HR Recruitment Platform",
    "AI Energy Management System",
    "AI Autonomous Vehicle Management",
    "AI Blockchain Supply Chain",
    "AI Smart City Infrastructure",
    "AI Quantum Financial Trading"
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI solutions, cloud migration, cybersecurity, and digital transformation services." />
        <meta name="keywords" content="contact zion tech group, AI consulting, cloud services, cybersecurity, technology solutions" />
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Get in Touch with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto">
                Ready to transform your business with cutting-edge AI solutions? 
                Contact our expert team for a personalized consultation and discover how our 
                20+ micro SAAS services can drive your success.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                      <a href={`tel:${contactInfo.phone}`} className="text-indigo-600 hover:text-indigo-700 text-lg font-medium">
                        {contactInfo.phone}
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Call us for immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <a href={`mailto:${contactInfo.email}`} className="text-indigo-600 hover:text-indigo-700 text-lg font-medium">
                        {contactInfo.email}
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Send us your project details</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600 text-lg font-medium">
                        {contactInfo.address}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">Visit our headquarters</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600 text-lg font-medium">
                        {contactInfo.hours}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">Eastern Standard Time</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Website</h3>
                      <a href={contactInfo.website} className="text-indigo-600 hover:text-indigo-700 text-lg font-medium">
                        {contactInfo.website}
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Explore our services online</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="cloud-migration">Cloud Migration</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="custom-development">Custom Development</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI-Powered Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI solutions designed to transform your business operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Advanced AI solution to optimize your business processes and drive growth.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our AI solutions can transform your business. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Call Now: {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-medium"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;