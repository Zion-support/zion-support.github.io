import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

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
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

import React from 'react';

const Contact: React.FC = () => {
pr-12243
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team to discuss your project requirements and how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                  <p className="text-sm text-gray-400">Available 9 AM - 6 PM EST</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  <p className="text-sm text-gray-400">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"
                  placeholder="Your name"
                />
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
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
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

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
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
import Button from '../components/Button';
import Card from '../components/Card';
import { useToast } from '../hooks/useToast';
const Contact: React.FC = () => {
  const { success, error } = useToast();
  const [formData, setFormData] = useState({
    name: ,
    email: ,
    company: ,
    message: ')
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">"
</div>"
      <div className="container mx-auto px-4 py-16">"
        <div className="max-w-4xl mx-auto">"
          <div className="text-center mb-16">"
            <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>""
            <p className="text-xl text-gray-300">"
</p>
          </div>
"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">"


ursor/fix-syntax-push-and-merge-to-main-f9ca
    message: 

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-foreground/80">
              Get in touch with our team to discuss your technology needs
    success('Thank you for your message! We will get back to you soon.');
    
    // Reset form

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
            <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Ready to transform your business? Get in touch with our team of experts.
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                    id="company"
                    name="company"
                    value={formData.company}
                
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            {/* Contact Form */}
            <Card>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>""
              <form onSubmit={handleSubmit} className="space-y-6">"
</form>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">"
                  <input;"
                    type="text"""
                    id="name"""
                    name="name""
                    required;"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"""
                    placeholder="Your name""
</input>

                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">"
                    type="email"""
                    id="email"""
                    name="email""
                    placeholder="your@email.com""

                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">"
                    id="company"""
                    name="company""
                    onChange={handleChange}"
                    placeholder="Your company""

                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">"
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  <textarea;"
                    id="message"""
                    name="message""
                    value={formData.message}
                    required;
                    rows={5}"
                    placeholder="Tell us about your project...""
                    rows={5}
                
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
pr-12325
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
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
pr-12243
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
            
              <h2 className="text-2xl font-semibold text-foreground mb-6">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-xl">📧</span>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-foreground/70">info@ziontechgroup.com</p>
                
                    <span className="text-primary text-xl">📞</span>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-foreground/70">+1 (555) 123-4567</p>
                
                    <span className="text-primary text-xl">📍</span>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-foreground/70">
                      123 Tech Street<br />
                      San Francisco, CA 94105
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your project..."
</textarea>
                <Button type="submit" variant="primary" size="large" className="w-full">"

                
            <div className="space-y-8">"
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>""
                <div className="space-y-4">"
                  <div className="flex items-center space-x-4">"
                    <div className="text-2xl">📧</div>"
                      <p className="font-semibold">Email</p>""
                      <p className="text-gray-300">info@ziontechgroup.com</p>"
                    <div className="text-2xl">📞</div>"
                      <p className="font-semibold">Phone</p>""
                      <p className="text-gray-300">+1 (555) 123-4567</p>"
                    <div className="text-2xl">📍</div>"
                      <p className="font-semibold">Address</p>""
                      <p className="text-gray-300">"
</br>
              

                <h2 className="text-3xl font-bold mb-6">Business Hours</h2>""
                <div className="space-y-2">"
                  <div className="flex justify-between">"
                    <span>Monday - Friday</span>"
                    <span className="text-gray-300">9:00 AM - 6:00 PM</span>"
                    <span>Saturday</span>"
                    <span className="text-gray-300">10:00 AM - 4:00 PM</span>"
                    <span>Sunday</span>"
                    <span className="text-gray-300">Closed</span>"
              
pr-12325
