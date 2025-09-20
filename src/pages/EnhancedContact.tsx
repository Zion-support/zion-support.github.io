import React, { useState } from "react"
import { motion } from "framer-motion"
import { ;
  Phone,;
  Mail, ;
  MapPin, ;
  Clock, ;
  MessageSquare, ;
  Send,;
  Globe,;
  Building,;
  User,;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Award,;
  Shield,;
  Zap,;
  Brain,;
  Cpu,;
  Database,;
  Network,;
  Rocket;
} from "lucide-react"
import { SEO } from "../components/SEO"
const EnhancedContact: React.FC = () => {
  const [formData, setFormData] = useState({;
    name: '',email: '',company: '',phone: '',service: '',message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isSubmitted, setIsSubmitted] = useState(false),;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    setFormData({;
      ...formData
      [e.target.name]: e.target.value
    }),;
  },;

  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault()
    setIsSubmitting(true),;
    ;
    //[^;]*
    await new Promise(resolve => setTimeout(resolve, 2000)),;
    ;
    setIsSubmitted(true),;
    setIsSubmitting(false),;
    ;
    //[^;]*
    setTimeout(() => {;
      setIsSubmitted(false),;
      setFormData({;
        name: '',email: '',company: '',phone: '',service: '',message: ''
      });
    }, 3000),;
  },;

  const services = [;
    { id: 'ai-analytics', name: 'AI & Analytics Solutions', icon: <Brain className="w-5 h-5" /> };
    { id: 'quantum-computing', name: 'Quantum Computing Services', icon: <Cpu className="w-5 h-5" /> };
    { id: 'blockchain', name: 'Blockchain Solutions', icon: <Database className="w-5 h-5" /> };
    { id: 'iot-smart-cities', name: 'IoT & Smart Cities', icon: <Network className="w-5 h-5" /> };
    { id: 'cybersecurity', name: 'Cybersecurity Services', icon: <Shield className="w-5 h-5" /> };
    { id: 'metaverse', name: 'Metaverse Solutions', icon: <Globe className="w-5 h-5" /> };
    { id: 'custom', name: 'Custom Solution', icon: <Rocket className="w-5 h-5" /> };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for innovative micro SAAS services. Contact us via phone, email, or visit our office in Middletown, DE."
      />;
      ;
      {/* Hero Section */};
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <motion.h1 ;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              Let's Build the Future;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">;
                Together;
              </[^>]*>
            </[^>]*>
            <motion.p ;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.2 }};
              className="[^"]*"
            >;
              Ready to transform your business with cutting-edge technology? ;
              Our team of experts is here to help you navigate the future of AI, Quantum Computing, and more.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">;
          ;
          {/* Contact Information */};
          <motion.div
            initial={{ opacity: 0, x: -20 }};
            animate={{ opacity: 1, x: 0 }};
            transition={{ duration: 0.8, delay: 0.3 }};
          >;
            <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</[^>]*>
            ;
            <div className="space-y-8">;
              {/* Phone */};
              <div className="flex items-start space-x-4">;
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">;
                  <[^>]*/>
                </[^>]*>
                <div>;
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</[^>]*>
                  <p className="text-gray-300 mb-1">+1 302 464 0950</[^>]*>
                  <p className="text-sm text-gray-400">Available Monday - Friday, 9:00 AM - 6:00 PM EST</[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Email */};
              <div className="flex items-start space-x-4">;
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">;
                  <[^>]*/>
                </[^>]*>
                <div>;
                  <h3 className="text-lg font-semibold text-white mb-2">Email</[^>]*>
                  <p className="text-gray-300 mb-1">kleber@ziontechgroup.com</[^>]*>
                  <p className="text-sm text-gray-400">We typically respond within 2-4 hours during business hours</[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Address */};
              <div className="flex items-start space-x-4">;
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">;
                  <[^>]*/>
                </[^>]*>
                <div>;
                  <h3 className="text-lg font-semibold text-white mb-2">Office Address</[^>]*>
                  <p className="text-gray-300 mb-1">364 E Main St STE 1008</[^>]*>
                  <p className="text-gray-300 mb-1">Middletown, DE 19709</[^>]*>
                  <p className="text-sm text-gray-400">United States</[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Website */};
              <div className="flex items-start space-x-4">;
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">;
                  <[^>]*/>
                </[^>]*>
                <div>;
                  <h3 className="text-lg font-semibold text-white mb-2">Website</[^>]*>
                  <p className="text-gray-300 mb-1">https://ziontechgroup.com</[^>]*>
                  <p className="text-sm text-gray-400">Explore our services and solutions online</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Why Choose Us */};
            <div className="mt-12">;
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</[^>]*>
              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Cutting-edge AI & Quantum Computing expertise</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Proven track record of successful implementations</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">24/7 support and maintenance</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Competitive pricing with exceptional ROI</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Custom solutions tailored to your needs</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Contact Form */};
          <motion.div
            initial={{ opacity: 0, x: 20 }};
            animate={{ opacity: 1, x: 0 }};
            transition={{ duration: 0.8, delay: 0.5 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</[^>]*>
            ;
            {isSubmitted ? (;
              <div className="text-center py-12">;
                <[^>]*/>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</[^>]*>
                <p className="text-gray-300">Thank you for reaching out. We'll get back to you within 2-4 hours.</[^>]*>
              </[^>]*>
            ) : (;
              <form onSubmit={handleSubmit} className="space-y-6">;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                  <div>;
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">;
                      Full Name *;
                    </[^>]*>
                    <input;
                      type="text"
                      id="name"
                      name="name"
                      required;
                      value={formData.name};
                      onChange={handleInputChange};
                      className="[^"]*"
                      placeholder="Enter your full name"
                    />;
                  </[^>]*>
                  ;
                  <div>;
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">;
                      Email Address *;
                    </[^>]*>
                    <input;
                      type="email"
                      id="email"
                      name="email"
                      required;
                      value={formData.email};
                      onChange={handleInputChange};
                      className="[^"]*"
                      placeholder="Enter your email"
                    />;
                  </[^>]*>
                </[^>]*>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                  <div>;
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">;
                      Company;
                    </[^>]*>
                    <input;
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company};
                      onChange={handleInputChange};
                      className="[^"]*"
                      placeholder="Enter your company name"
                    />;
                  </[^>]*>
                  ;
                  <div>;
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">;
                      Phone Number;
                    </[^>]*>
                    <input;
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone};
                      onChange={handleInputChange};
                      className="[^"]*"
                      placeholder="Enter your phone number"
                    />;
                  </[^>]*>
                </[^>]*>

                <div>;
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">;
                    Service of Interest;
                  </[^>]*>
                  <select;
                    id="service"
                    name="service"
                    value={formData.service};
                    onChange={handleInputChange};
                    className="[^"]*"
                  >;
                    <option value="">Select a service</[^>]*>
                    {services.map((service) => (;
                      <option key={service.id} value={service.id}>;
                        {service.name};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                <div>;
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">;
                    Message *;
                  </[^>]*>
                  <textarea;
                    id="message"
                    name="message"
                    required;
                    rows={5};
                    value={formData.message};
                    onChange={handleInputChange};
                    className="[^"]*"
                    placeholder="Tell us about your project or inquiry..."
                  />;
                </[^>]*>

                <button;
                  type="submit"
                  disabled={isSubmitting};
                  className="[^"]*"
                >;
                  {isSubmitting ? (;
                    <>;
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></[^>]*>
                      Sending Message...;
                    </[^>]*>
                  ) : (;
                    <>;
                      Send Message;
                      <[^>]*/>
                    </[^>]*>
                  )};
                </[^>]*>
              </[^>]*>
            )};
          </[^>]*>
        </[^>]*>

        {/* Call to Action */};
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8, delay: 0.7 }};
          className="[^"]*"
        >;
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl p-8 border border-zion-cyan/30">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Ready to Get Started?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">;
              Don't wait to transform your business. Contact us today to discuss your project ;
              and discover how our innovative solutions can drive your success.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call Now: +1 302 464 0950;
              </[^>]*>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="[^"]*"
              >;
                <[^>]*/>
                Send Email;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default EnhancedContact;