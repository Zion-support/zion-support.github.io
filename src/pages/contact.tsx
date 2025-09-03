import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Shield, 
  Award, 
  Users, 
  Zap 
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'AI Content Creation Suite',
    'AI Customer Support Automation',
    'AI Marketing Automation',
    'AI Financial Analytics',
    'Affiliate Marketing Tracking',
    'Event Management Dashboard',
    'Helpdesk Platform',
    'Email Automation Sequencer',
    'Cloud Migration Services',
    'DevOps & CI/CD Implementation',
    'Cybersecurity Assessment',
    'IT Infrastructure Management',
    'Quantum Computing Solutions',
    'IoT Edge Computing',
    'Blockchain Development',
    'Custom Solution'
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team during business hours',
      contact: '+1 302 464 0950',
      href: 'tel:+13024640950'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our office is located in Middletown, Delaware',
      contact: '364 E Main St STE 1008, Middletown, DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'We\'re available 24/7 for urgent support',
      contact: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      href: null
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security for all your data and communications'
    },
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'Our team holds industry certifications and continuous training'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 support with dedicated account managers'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Quick turnaround times for all your technology needs'
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI services, IT solutions, and micro SaaS development. Free consultation available."
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready to transform your business with our AI, IT, and micro SaaS solutions? 
                Contact us today for a free consultation and discover how we can help you succeed.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the most convenient way to get in touch with our team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                    <method.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{method.description}</p>
                  {method.href ? (
                    <a 
                      href={method.href}
                      className="text-cyan-600 hover:text-cyan-700 font-medium"
                    >
                      {method.contact}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-medium">{method.contact}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Tell us about your project, requirements, or any questions you have..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <p className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to delivering exceptional results and outstanding customer service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-4">
                    <reason.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Don't wait to transform your business. Contact us today for a free consultation 
              and discover how our solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;