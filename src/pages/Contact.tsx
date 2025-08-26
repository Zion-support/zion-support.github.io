import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  CheckCircle,
  Send,
  Building,
  Users,
  Globe
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate success
    setFormStatus('success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
      setFormStatus('idle');
    }, 3000);
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST'
  };

  const services = [
    'AI & Machine Learning',
    'IT Infrastructure',
    'Cloud Solutions',
    'Digital Transformation',
    'Custom Software Development',
    'Cybersecurity',
    'Data Analytics',
    'IoT Solutions'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const timelineOptions = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Extended (6+ months)',
    'Flexible'
  ];

  return (
    <>
      <SEO 
        title="Contact Zion Tech Group - Get in Touch for AI & IT Solutions"
        description="Contact Zion Tech Group for cutting-edge AI, IT, and digital transformation services. Get expert consultation and customized solutions for your business needs."
        keywords="contact, Zion Tech Group, AI solutions, IT services, digital transformation, consultation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GradientHeading className="text-4xl md:text-6xl mb-6">
                Let's Build Something Amazing Together
              </GradientHeading>
              <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
                Ready to transform your business with cutting-edge AI and IT solutions? 
                Our team of experts is here to help you succeed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-zion-blue-light/30">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Get Your Free Consultation</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Tell us about your project and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-zion-slate-light mb-2">
                            First Name *
                          </label>
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="bg-white/20 border-zion-blue-light/30 text-white placeholder-zion-slate-light"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zion-slate-light mb-2">
                            Last Name *
                          </label>
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="bg-white/20 border-zion-blue-light/30 text-white placeholder-zion-slate-light"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-zion-slate-light mb-2">
                            Email *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="bg-white/20 border-zion-blue-light/30 text-white placeholder-zion-slate-light"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zion-slate-light mb-2">
                            Phone
                          </label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-white/20 border-zion-blue-light/30 text-white placeholder-zion-slate-light"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zion-slate-light mb-2">
                          Company
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-white/20 border-zion-blue-light/30 text-white placeholder-zion-slate-light"
                          placeholder="Enter your company name"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-zion-slate-light mb-2">
                            Service Interest
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-white/20 border border-zion-blue-light/30 rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service} className="bg-zion-blue-dark text-white">
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zion-slate-light mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-white/20 border border-zion-blue-light/30 rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range} className="bg-zion-blue-dark text-white">
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zion-slate-light mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-white/20 border border-zion-blue-light/30 rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((timeline) => (
                            <option key={timeline} value={timeline} className="bg-zion-blue-dark text-white">
                              {timeline}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zion-slate-light mb-2">
                          Project Details *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="bg-white/20 border-zion-blue-light/30 text-white placeholder-zion-slate-light resize-none"
                          placeholder="Tell us about your project, goals, and requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        {formStatus === 'submitting' ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending Message...
                          </div>
                        ) : formStatus === 'success' ? (
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Message Sent Successfully!
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Contact Details */}
                <Card className="bg-white/10 backdrop-blur-sm border-zion-blue-light/30">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      We're here to help and answer any questions you might have
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Phone</h4>
                        <p className="text-zion-slate-light">{contactInfo.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Email</h4>
                        <p className="text-zion-slate-light">{contactInfo.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Address</h4>
                        <p className="text-zion-slate-light">{contactInfo.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Business Hours</h4>
                        <p className="text-zion-slate-light">{contactInfo.hours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="bg-white/10 backdrop-blur-sm border-zion-blue-light/30">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Why Choose Zion Tech Group?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-zion-slate-light">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        <span>10+ years of industry experience</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        <span>500+ successful projects delivered</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        <span>Global team of experts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        <span>24/7 support and maintenance</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        <span>Competitive pricing and flexible terms</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="py-20"
        >
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and create a customized solution that drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Schedule Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Download Brochure
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
