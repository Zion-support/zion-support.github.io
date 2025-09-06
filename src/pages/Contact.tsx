
ursor/automate-test-improve-and-merge-code-646c
import React, { useState } from 'react';
import { useToast } from '../components/ui/use-toast';
import { useNotifications } from '../context/NotificationContext';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const { addNotification } = useNotifications();
  
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Contact = () => {
>>>>>>> main

const Contact: React.FC = () => {
  const { toast } = useToast();
  const { addNotification } = useNotifications();
>>>>>>> main
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => {
>>>>>>> main
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SEOHead
        title="Contact Us - Zion Tech Group"
        description="Get in touch with our team for AI and technology solutions. We're here to help transform your business."
        keywords="contact, support, AI solutions, technology consulting"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with AI and technology? Let's discuss your needs and create a solution that works for you.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">


          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Your full name"
                />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@ziontechgroup.com</p>
                    <p className="text-gray-600">support@ziontechgroup.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">
                      123 Technology Drive<br />
                      Suite 100<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
ursor/automate-test-improve-and-merge-code-646c
              </div>
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon."
      });
      
      addNotification({
        id: Date.now().toString(),
        type: 'success',
        title: 'Contact Form Submitted',
        message: 'Your message has been sent successfully!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };
import React from 'react';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI and technology solutions. Contact our expert team for a free consultation."
        keywords="contact, consultation, AI services, technology solutions, get in touch"
        url="/contact"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <ScrollAnimation animation="slideUp" delay={0.2}>
                <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Ready to transform your business? Let's discuss your project and discover 
                    how our solutions can accelerate your growth.
                  </p>
                </div>
              </ScrollAnimation>
ursor/integrate-build-improve-and-re-verify-9d47
            </div>
          </section>

            {/* Quick Response */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
              <p className="text-gray-600 mb-4">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Average response time: 2 hours</span>
              </div>
            </div>
          </div>

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
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Ready to transform your business with cutting-edge technology? 
          Get in touch with our team of experts today.
        </p>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800 text-lg">
                      +1 302 464 0950
                    </a>
                    <p className="text-gray-600">Available 24/7 for urgent matters</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800 text-lg">
                      kleber@ziontechgroup.com
                    </a>
                    <p className="text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 text-lg">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </p>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span>1000+ successful projects delivered</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span>Enterprise-grade security</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span>Custom solutions for every need</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span>Proven track record of success</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-services">AI Services</option>
                    <option value="micro-saas">Micro SaaS Solutions</option>
                    <option value="it-services">IT Services</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="blockchain">Blockchain Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
          {/* Contact Form & Info */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <ScrollAnimation animation="slideUp" delay={0.2}>
                  <Card className="p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
                    <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Your Company"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Service Interest
                        </label>
                        <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                          <option>AI Services</option>
                          <option>IT Services</option>
                          <option>Micro SaaS</option>
                          <option>Cybersecurity</option>
                          <option>Cloud Solutions</option>
                          <option>Data Analytics</option>
                          <option>Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Tell us about your project..."
                        ></textarea>
                      </div>
                      
                      <Button size="lg" className="w-full">
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </Card>
                </ScrollAnimation>

                {/* Contact Info */}
                <ScrollAnimation animation="slideUp" delay={0.4}>
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        We're here to help you succeed. Reach out to us through any of the channels below, 
                        and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Mail className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                          <p className="text-gray-300">contact@ziontechgroup.com</p>
                          <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                          <p className="text-gray-300">+1 (555) 123-4567</p>
                          <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM PST</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Office</h3>
                          <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                          <p className="text-gray-400 text-sm">Visit us by appointment</p>
                        </div>
                      </div>
                    </div>

                    <Card className="p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30">
                      <h3 className="text-xl font-semibold text-white mb-3">Free Consultation</h3>
                      <p className="text-gray-300 mb-4">
                        Book a free 30-minute consultation to discuss your project requirements 
                        and get expert advice on the best solutions for your business.
                      </p>
                      <Button variant="outline" className="w-full">
                        Schedule Consultation
                      </Button>
                    </Card>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>
        </main>

        <Footer />
ursor/integrate-build-improve-and-re-verify-9d47
      </div>
    </>
  );
};


export default Contact;

      </section>
    </div>
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ScrollAnimation from '../components/ScrollAnimation';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      <SEO
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI and technology solutions. Contact our expert team for a free consultation."
        keywords="contact, consultation, AI services, technology solutions, get in touch"
        url="/contact"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <ScrollAnimation animation="slideUp" delay={0.2}>
                <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Ready to transform your business? Let's discuss your project and discover 
                    how our solutions can accelerate your growth.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <ScrollAnimation animation="slideUp" delay={0.2}>
                  <Card className="p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
                    <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Your Company"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Service Interest
                        </label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="ai-services">AI Services</option>
                          <option value="it-services">IT Services</option>
                          <option value="micro-saas">Micro SaaS</option>
                          <option value="cybersecurity">Cybersecurity</option>
                          <option value="cloud-solutions">Cloud Solutions</option>
                          <option value="data-analytics">Data Analytics</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Tell us about your project..."
                          required
                        ></textarea>
                      </div>
                      
                      <Button size="lg" className="w-full" type="submit">
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </Card>
                </ScrollAnimation>

                {/* Contact Info */}
                <ScrollAnimation animation="slideUp" delay={0.4}>
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        We're here to help you succeed. Reach out to us through any of the channels below, 
                        and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Mail className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                          <p className="text-gray-300">kleber@ziontechgroup.com</p>
                          <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                          <p className="text-gray-300">+1 302 464 0950</p>
                          <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Office</h3>
                          <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                          <p className="text-gray-400 text-sm">Visit us by appointment</p>
                        </div>
                      </div>
                    </div>

                    <Card className="p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30">
                      <h3 className="text-xl font-semibold text-white mb-3">Free Consultation</h3>
                      <p className="text-gray-300 mb-4">
                        Book a free 30-minute consultation to discuss your project requirements 
                        and get expert advice on the best solutions for your business.
                      </p>
                      <Button variant="outline" className="w-full">
                        Schedule Consultation
                      </Button>
                    </Card>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
  );
}
};

export default Contact;
export default Contact;
export default Contact;
import { useState  } from 'react';
import { Header  } from '@/components/Header';
import { SEO  } from '@/components/SEO';
import { GradientHeading  } from '@/components/GradientHeading';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
import { Card  } from '@/components/ui/card';
import { toast  } from '@/components/ui/use-toast';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger } from '@/components/ui/tooltip';
import z from 'zod';
import { ChatAssistant  } from '@/components/ChatAssistant';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '';
    email: '';
    message: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string
  }>({}),
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = null;
            role: 'Support Bot'}}
          onSendMessage={handleSendMessage}
          starterQuestions={[
            'How do I list a product?What services does Zion offer?Where can I view pricing plans?How do I create an account?Can I talk to a human representative?']}
        />
      )}
    </>
  );

}) .catch ( (err) => {';
  //This catches errors from the fetch promise (network, res.ok is false,  or manual throw) logErrorToProduction ('[ContactForm] Fetch promise chain error:', {;
  data: err ;
});
setIsSubmitting (false);
toast ({';
  title: 'Submission Error';';
description: err.message || 'An unexpected error occurred during submission.';';
variant: 'destructive' ;
}) ;
}) ;
}catch (error) {';
  //This catches synchronous errors that might occur when initiating fetch or in its direct vicinity //if not caught by the promise's .catch (less common for typical fetch issues but good for safety) logErrorToProduction ('[ContactForm] Synchronous error during fetch initiation or processing:', {;
  data: error ;
});
setIsSubmitting (false);
toast ({';
  title: 'Critical Submission Error';';
description: error instanceof Error ? error.message : 'An unexpected critical error occurred.';';
variant: 'destructive' ;
}) ;

};
//Handle sending messages to the AI chat assistant const handleSendMessage = async (message: string) : Promise<void> => {;
  try {';
  const response = await fetch ('https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat',  {';
  method: 'POST', headers: {';
  'Content-Type': 'application/json' ;
};

};';
return (<> <SEO title="Contact Us - Get Help from Zion Tech Marketplace" description="Reach out to Zion Tech Marketplace for personalized support. Ask questions, get guidance, and connect with our tech-savvy team today. We’re eager to assist—drop us a line anytime." keywords="contact Zion, AI marketplace support, tech platform contact" canonical="https://app.ziontechgroup.com/contact" /> <main className="min-h-screen bg-zion-blue pt-24 pb-20" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="text-center mb-16" > <GradientHeading>Contact Us</GradientHeading> <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto" > Have questions or want to learn more? We'd love to hear from you. </p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24" > <div> <h2 className="text-3xl font-bold text-white mb-6" > Get in Touch </h2> <p className="text-zion-slate-light text-lg mb-8" > Whether you have a question about our platform, pricing, or anything else, our team is ready to answer all your questions. </p> <div> <label htmlFor="name" className="block text-white mb-2" > Your Name </label> <Input) ";
}</div> <div> <label htmlFor="email" className="block text-white mb-2" > Email Address </label> <Input {;
  errors.email ;
}</p>) ";
}</div> </div> <div> <label htmlFor="message" className="block text-white mb-2" > Message </label> <Textarea {;
  errors.message ;
}</p>) ;
}</div> <Button > {';
  isSubmitting ? 'Sending...' : 'Send Message' ;
}</Button> <AnimatePresence> {";
  submitted && (<motion.div > <h3 className="text-green-500 text-lg font-bold" > Message Sent! </h3> <p className="text-zion-slate-light" > Thanks for reaching out. Our team received your message and will respond with helpful info as soon as possible shortly. </p> </motion.div>) ";
}</AnimatePresence> </form> </div> <div> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <h2 className="text-3xl font-bold text-white mb-6" > Our Offices </h2> </TooltipTrigger> <TooltipContent> We list several offices so you can connect with the team closest to your region for faster support. </TooltipContent> </Tooltip> </TooltipProvider> <Card key= {;
  index ";
}className="bg-zion-blue-dark border border-zion-blue-light p-6" > </span> </div> <div className="flex items-center" > <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" /> <a </div> </div> </Card>) ) ";
}</div> <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden" > <iframe ></iframe> </div> <div className="mt-8" > <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6" > <div className="flex items-center" > <div className="bg-zion-purple/20 p-3 rounded-full mr-4" > <MessageSquare className="h-6 w-6 text-zion-purple" /> </div> <div> <h3 className="text-white text-lg font-bold" > Live AI Support </h3> <p className="text-zion-slate-light" > Get instant answers to your questions </p> </div> </div> <Button > Chat With Our AI Assistant </Button> </Card> </div> </div> </div> <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center" > <h2 className="text-3xl font-bold text-white mb-6" > Need immediate assistance? </h2> <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto" > Our customer support team is available 24/7 to help you with any questions. </p> <div className="flex flex-col sm:flex-row justify-center gap-4" > <Button > <MessageSquare className="mr-2 h-5 w-5" /> Chat With AI </Button> <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" asChild > <a href="mailto:support@ziontechgroup.com" > <Mail className="mr-2 h-5 w-5" /> Email Support </Link> </Button> </div> </div> Zion blog </Link> {';
  ' ' ;
}for additional insights. </p> </div> </div> </main> {;
  /* Chat Assistant Modal */ ;
}{;
  isChatOpen && (<ChatAssistant isOpen= {;
  isChatOpen ;
}/>) ;
}</>) ;
}'"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
}
