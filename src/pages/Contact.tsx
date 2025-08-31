import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle,
  AlertCircle,
  Building,
  User,
  Globe,
  FileText,
  ArrowRight,
  Star,
  Award,
  Users,
  Shield,
  Zap
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: '',
    howDidYouHear: ''
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
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: '',
        howDidYouHear: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (302) 464-0950",
      description: "Call us anytime",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      description: "Send us a message",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Delaware, USA",
      description: "Headquarters",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "24/7 Support",
      description: "Always available",
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    "AI & Machine Learning",
    "Quantum Computing",
    "Cybersecurity",
    "Cloud & DevOps",
    "Blockchain & Web3",
    "Digital Transformation",
    "IT Infrastructure",
    "Custom Development",
    "Other"
  ];

  const budgets = [
    "Under $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $500,000",
    "$500,000+",
    "Not sure yet"
  ];

  const timelines = [
    "Immediate (1-3 months)",
    "Short-term (3-6 months)",
    "Medium-term (6-12 months)",
    "Long-term (12+ months)",
    "Not sure yet"
  ];

  const howDidYouHear = [
    "Google Search",
    "Social Media",
    "Referral",
    "Industry Event",
    "Online Advertisement",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Ready to transform your business? Let's discuss how our cutting-edge solutions can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
                <span className="text-2xl mr-2">🚀</span>
                <span className="text-slate-300">Free Consultation</span>
              </div>
              <div className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
                <span className="text-2xl mr-2">⚡</span>
                <span className="text-slate-300">24/7 Support</span>
              </div>
              <div className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
                <span className="text-2xl mr-2">🛡️</span>
                <span className="text-slate-300">Enterprise Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <div className="text-cyan-400 font-medium mb-1">{info.value}</div>
                <div className="text-slate-400 text-sm">{info.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
                <p className="text-slate-400">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">Something went wrong. Please try again or contact us directly.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-300 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="howDidYouHear" className="block text-sm font-medium text-slate-300 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    id="howDidYouHear"
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    {howDidYouHear.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Expert Team</h4>
                      <p className="text-slate-400 text-sm">Industry veterans with deep technical expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Enterprise Security</h4>
                      <p className="text-slate-400 text-sm">Bank-level security and compliance standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Rapid Delivery</h4>
                      <p className="text-slate-400 text-sm">Agile development with quick time-to-market</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Proven Results</h4>
                      <p className="text-slate-400 text-sm">Track record of successful implementations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                        Call Us Now
                      </div>
                      <div className="text-slate-400 text-sm">+1 (302) 464-0950</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                        Send Email
                      </div>
                      <div className="text-slate-400 text-sm">kleber@ziontechgroup.com</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Monday - Friday</span>
                    <span className="text-white font-medium">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Saturday</span>
                    <span className="text-white font-medium">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Sunday</span>
                    <span className="text-white font-medium">Emergency Support Only</span>
                  </div>
                  <div className="pt-3 border-t border-slate-700/50">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">24/7 Emergency Support</span>
                      <span className="text-cyan-400 font-medium">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Don't wait to transform your business. Contact us today and let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
