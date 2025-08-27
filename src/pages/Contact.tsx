import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61e30eca5fbfc0775ada7e1bb633889d4df21738
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
<<<<<<< HEAD
  MessageSquare, 
=======
  MessageCircle, 
>>>>>>> 61e30eca5fbfc0775ada7e1bb633889d4df21738
  Globe, 
  Users,
<<<<<<< HEAD
  CheckCircle,
  ArrowRight,
  Mailbox,
  Calendar,
  Star
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    department: 'general'
=======
  Building,
  Zap,
  Shield,
  CheckCircle
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
>>>>>>> 61e30eca5fbfc0775ada7e1bb633889d4df21738
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-zion-cyan" />,
      title: 'Email Us',
      details: 'contact@ziontechgroup.com',
      description: 'Get in touch via email for general inquiries'
    },
    {
      icon: <Phone className="w-6 h-6 text-zion-cyan" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak directly with our team'
    },
    {
      icon: <MapPin className="w-6 h-6 text-zion-cyan" />,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule an in-person meeting'
    },
    {
      icon: <Clock className="w-6 h-6 text-zion-cyan" />,
      title: 'Business Hours',
      details: 'Mon-Fri 9AM-6PM PST',
      description: 'We\'re here when you need us'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Cybersecurity Solutions',
    'Cloud & DevOps',
    'IT Consulting',
    'Micro SAAS Development',
    'Digital Transformation',
    'Quantum Computing',
    'Blockchain Services'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Contact Zion Tech Group - Get In Touch"
        description="Contact Zion Tech Group for AI services, cybersecurity solutions, cloud consulting, and technology expertise. Get in touch with our team of experts."
        keywords="contact, Zion Tech Group, AI services, cybersecurity, cloud consulting, IT services"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Let's <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Connect
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to transform your business with cutting-edge technology? 
              Get in touch with our team of experts and let's discuss how we can help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Touch</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-zion-cyan font-medium mb-2">{info.details}</p>
                <p className="text-zion-slate-light text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Send us a <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Message</span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Tell us about your project or inquiry. We'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-zion-cyan/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {submitSuccess ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-zion-slate-light">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zion-slate-dark/70 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zion-slate-dark/70 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-dark/70 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-dark/70 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark/70 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-zion-slate-dark/70 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-zion-cyan" />,
                title: 'Innovation First',
                description: 'We stay ahead of the curve with cutting-edge technologies and forward-thinking solutions.'
              },
              {
                icon: <Shield className="w-12 h-12 text-zion-cyan" />,
                title: 'Proven Expertise',
                description: 'Our team brings years of experience and deep technical knowledge to every project.'
              },
              {
                icon: <Users className="w-12 h-12 text-zion-cyan" />,
                title: 'Client Partnership',
                description: 'We work closely with you to understand your needs and deliver solutions that drive results.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
=======
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            toast({
                title: "Form Validation Error",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: "Message Sent",
                description: "We've received your message and will get back to you soon.",
            });
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 1500);
    };

    const offices = [
        {
            name: "Headquarters",
            address: "123 Tech Avenue, San Francisco, CA 94105",
            phone: "+1 302 464 0950",
            email: "commercial@ziontechgroup.com"
        },
        {
            name: "East Coast Office",
            address: "456 Innovation Street, New York, NY 10001",
            phone: "+1 302 464 0950",
            email: "commercial@ziontechgroup.com"
        }
    ];

    return (
        <>
            <SEO 
                title="Contact Zion - Get in Touch" 
                description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform." 
                keywords="contact Zion, AI marketplace support, tech platform contact" 
                canonical="https://ziontechgroup.com/contact" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Get in
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Touch</span>
                        </h1>
                        <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
                            Have questions or want to learn more? We'd love to hear from you.
                        </p>
                    </div>

                    {/* Contact Form and Office Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                            <p className="text-zion-slate-light text-lg mb-8">
                                Whether you have a question about our platform, pricing, or anything else, 
                                our team is ready to answer all your questions.
                            </p>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-white mb-2">
                                            Your Name *
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`bg-zion-blue-dark border-zion-blue-light text-white ${
                                                errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''
                                            }`}
                                            placeholder="John Doe"
                                            required
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-white mb-2">
                                            Email Address *
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`bg-zion-blue-dark border-zion-blue-light text-white ${
                                                errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''
                                            }`}
                                            placeholder="john@example.com"
                                            required
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                        )}
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-white mb-2">
                                        Subject *
                                    </label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`bg-zion-blue-dark border-zion-blue-light text-white ${
                                            errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''
                                        }`}
                                        placeholder="How can we help you?"
                                        required
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                                    )}
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-white mb-2">
                                        Message *
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px] ${
                                            errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''
                                        }`}
                                        placeholder="Tell us what you'd like to know..."
                                        required
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                    )}
                                </div>
                                
                                <Button 
                                    type="submit" 
                                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>

                        {/* Office Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
                            <div className="grid grid-cols-1 gap-6">
                                {offices.map((office, index) => (
                                    <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light p-6">
                                        <CardContent className="p-0">
                                            <h3 className="text-xl font-bold text-white mb-3">{office.name}</h3>
                                            <div className="space-y-3">
                                                <div className="flex items-start">
                                                    <MapPin className="w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                                                    <span className="text-zion-slate-light">{office.address}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Phone className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                                                    <span className="text-zion-slate-light">{office.phone}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                                                    <a 
                                                        href={`mailto:${office.email}`} 
                                                        className="text-zion-cyan hover:underline"
                                                    >
                                                        {office.email}
                                                    </a>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Map */}
                            <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">
                                <div className="w-full h-64 bg-zion-blue-light flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                                        <p className="text-zion-slate-light">Interactive Map</p>
                                        <p className="text-sm text-zion-slate-light">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>

                            {/* AI Support Card */}
                            <div className="mt-8">
                                <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6">
                                    <CardContent className="p-0">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-zion-purple/20 p-3 rounded-full mr-4">
                                                <MessageSquare className="h-6 w-6 text-zion-purple" />
                                            </div>
                                            <div>
                                                <h3 className="text-white text-lg font-bold">Live AI Support</h3>
                                                <p className="text-zion-slate-light">Get instant answers to your questions</p>
                                            </div>
                                        </div>
                                        <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                                            Chat With Our AI Assistant
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Need immediate assistance?</h2>
                        <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
                            Our customer support team is available 24/7 to help you with any questions.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                                <MessageSquare className="mr-2 h-5 w-5" />
                                Chat With AI
                            </Button>
                            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" asChild>
                                <a href="mailto:support@ziontechgroup.com">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Email Support
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
}
