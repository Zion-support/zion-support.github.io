    phone: '',
    company: '',
    phone: '',
    service: '',
    company: '',
    phone: '',
    service: '',
    message: ''
    message: '',
    budget: '',
    timeline: ''
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import z from "zod";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { toast } from "@/components/ui/use-toast";
import { apiClient } from "@/utils/apiClient";
import z from "zod";
import { ChatAssistant } from "@/components/ChatAssistant/ChatAssistant";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Building, 
  Users, 
  Globe,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
export default function Contact() {
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowRight,
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Globe, 
  Building,
} from 'lucide-react';
const Contact: React.FC = () => {
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  const [isSubmitted, setIsSubmitted] = useState(false);
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        });
        setFormStatus('idle');
      }, 3000);
    }, 2000);
  };
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await apiClient("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: message }]
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant");
      }
      return Promise.resolve();
    } catch (error) {
      console.error("Error in AI chat:", error);
      toast({
        title: "Chat Error",
        description: "There was an error communicating with our AI assistant. Please try again.",
        variant: "destructive"
      });
      return Promise.resolve();
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Simulate form submission
    // Here you would typically send the form data to your backend
    // Form submitted successfully - console.log removed for production
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
    service: '',
    message: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };
  const contactMethods = [
    {
      description: 'Call us directly for immediate assistance',
      action: () => window.location.href = 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500'
      icon: Phone,
      title: 'Phone',
      value: '+1 302 464 0950',
      description: 'Available 24/7 for urgent inquiries',
      action: 'tel:+13024640950',
      color: 'from-zion-cyan to-zion-cyan-dark'
    },
    {
      icon: Mail,
      title: 'Email',
      name: "Headquarters",
      address: "364 E Main St STE 1008, Middletown DE 19709",
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
      name: "Zion Tech Group Headquarters",
      address: "364 E Main St STE 1008, Middletown, DE 19709",
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    }
  ];
  const officeLocations = [
    {
      city: 'New York',
      country: 'United States',
      address: '123 Tech Plaza, Suite 100',
      zip: '10001',
      phone: '+1 (212) 555-0123',
      email: 'nyc@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    },
    {
      city: 'San Francisco',
      country: 'United States',
      address: '456 Innovation Drive, Floor 3',
      zip: '94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '789 Business District, Office 5',
      zip: 'EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT'
      value: 'kleber@ziontechgroup.com',
      description: 'Send us a detailed message',
      action: () => window.location.href = 'mailto:kleber@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-500'
      value: 'kleber@ziontechgroup.com',
      description: 'Get a response within 2 hours',
      action: 'mailto:kleber@ziontechgroup.com',
      color: 'from-zion-purple to-zion-purple-dark'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Visit us for in-person consultations',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-zion-cyan to-zion-purple'
      description: 'Visit us for in-person consultations',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-zion-cyan to-zion-purple'
      description: 'Visit us for in-person consultations',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      title: "Phone",
      value: "+1 302 464 0950",
      link: "tel:+13024640950",
      description: "Call us directly for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com",
      description: "Send us an email for detailed inquiries"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      link: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      description: "Visit our office for in-person meetings"
    },
    {
      icon: Globe,
      title: "Website",
      value: "https://ziontechgroup.com",
      link: "https://ziontechgroup.com",
      description: "Explore our services and solutions"
      icon: Mail,
      title: 'Email Us',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      description: 'Get a quick response within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (302) 464-0950',
      link: 'tel:+13024640950',
      description: 'Available Monday-Friday, 9AM-6PM EST'
    }
  ];
  return (
      <SEO 
        title="Contact Zion - Get in Touch" 
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform." 
        keywords="contact Zion, AI marketplace support, tech platform contact"
        canonical="https://app.ziontechgroup.com/contact"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-zion-slate max-w-3xl mx-auto">
      title: "General Inquiries",
      description: "Questions about our services and solutions",
      email: "info@ziontechgroup.com",
      response: "Within 24 hours"
    },
    {
      title: "Sales & Business Development",
      description: "Discuss partnership opportunities and sales inquiries",
      email: "sales@ziontechgroup.com",
      response: "Within 4 hours"
    },
    {
      title: "Technical Support",
      description: "Technical questions and implementation support",
      email: "support@ziontechgroup.com",
      response: "Within 2 hours"
    },
    {
      title: "Careers & HR",
      description: "Job opportunities and human resources",
      email: "careers@ziontechgroup.com",
      response: "Within 48 hours"
    }
  ];
  const officeLocations = [
    {
      city: "Middletown, DE",
      country: "United States",
      address: "364 E Main St STE 1008",
      type: "Headquarters",
      phone: "+1 302 464 0950"
    },
    {
      city: "Silicon Valley, CA",
      country: "United States",
      address: "Innovation Center",
      type: "Research & Development",
      phone: "+1 650 123 4567"
    },
    {
      city: "New York, NY",
      country: "United States",
      address: "Financial District Office",
      type: "Business Development",
      phone: "+1 212 987 6543"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to transform your business with cutting-edge AI solutions? 
              Let's discuss how we can help you achieve extraordinary results.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Send Us a Message</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours with a customized solution.
            </p>
          </motion.div>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-12 text-center"
            >
              <CheckCircle className="w-20 h-20 text-zion-cyan mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h3>
              <p className="text-zion-slate-light text-lg">
                Thank you for reaching out. We'll get back to you within 24 hours with a detailed response.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                    placeholder="Enter your email address"
      {/* Contact Form & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            {formStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
                </div>
              </div>
            )}
            {formStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-red-400">There was an error sending your message. Please try again.</span>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
                    <label className="block text-white font-medium mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleSelectChange}
                      className="w-full bg-zion-slate-dark/50 border border-zion-blue-light/30 text-white rounded-md px-3 py-2 focus:border-zion-cyan focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan resize-none"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-semibold text-zion-blue-dark mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-semibold text-zion-blue-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Service of Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, requirements, and goals..."
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-4 px-8 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center justify-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <info.icon className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                  ))}
                </div>
                {info.action !== '#' && (
                  <a
                    href={info.action}
                    className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Contact Now →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form & Office Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-green-300">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Enter your email address"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-3 months)</option>
                      <option value="short-term">Short-term (3-6 months)</option>
                      <option value="medium-term">Medium-term (6-12 months)</option>
                      <option value="long-term">Long-term (1+ years)</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
              </div>
            ))}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
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
            )}
          </div>
        </div>
      </section>
      {/* Contact Form & Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all duration-200 group"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <div>
                        <p className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {social.name}
                        </p>
                        <p className="text-xs text-gray-400">{social.description}</p>
                      </div>
                    </a>
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
      {/* Why Choose Us */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in innovation and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Expert Team
              </h3>
              <p className="text-zion-slate">
                Our team of AI experts, software engineers, and business consultants bring 
                decades of combined experience to every project.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Proven Results
              </h3>
              <p className="text-zion-slate">
                We've helped hundreds of businesses achieve their digital transformation 
                goals with measurable ROI and lasting impact.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Innovation First
              </h3>
              <p className="text-zion-slate">
                We stay ahead of technology trends, ensuring your business benefits from 
                the latest innovations and best practices.
              </p>
                Fill out the form below and we'll get back to you within 24 hours. 
                Let's discuss your project requirements and how we can help.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zion-blue-dark mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales & Business Development</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="careers">Careers & HR</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4 text-zion-slate-light">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>Expert team with 15+ years of experience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>Cutting-edge AI and machine learning solutions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>24/7 support and maintenance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>Proven track record of successful projects</p>
                  </div>
                </div>
              </div>
        </div>
      </section>
      {/* Contact Methods */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Contact Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach our technology experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <div 
                  className="text-cyan-400 font-medium mb-2"
                  dangerouslySetInnerHTML={{ __html: method.details }}
                />
                <p className="text-gray-400 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tell us about your project and we'll get back to you with a customized solution
              </p>
            </div>
            <form onSubmit={handleSubmit} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-75.7167!3d39.4496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7a8b8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2s364%20E%20Main%20St%2C%20Middletown%2C%20DE%2019709!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-75.7167!3d39.4496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7a8b8b8b8b8b8%3A0x8b8b8b8b8b8b8b8!2s364%20E%20Main%20St%2C%20Middletown%2C%20DE%2019709%2C%20USA!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zion Tech Group Office Location"
                  title="Zion Tech Group Office Location"
                ></iframe>
              </div>
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project, requirements, or questions..."
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Office Location Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Located in the heart of Delaware's technology corridor
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group Headquarters</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">364 E Main St STE 1008</p>
                      <p>Middletown DE 19709</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span>Mon - Fri: 9:00 AM - 6:00 PM EST</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Get Directions</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Our office is easily accessible from major highways and public transportation
                </p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
export default Contact;
export default Contact;
export default Contact;
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (302) 464-0950",
      description: "Call us directly for immediate assistance",
      color: "text-zion-cyan"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      description: "Send us a detailed message anytime",
      color: "text-zion-purple"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      value: "364 E Main St STE 1008, Middletown, DE 19709",
      description: "Visit our headquarters",
      color: "text-zion-cyan"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      description: "We're here when you need us",
      color: "text-zion-purple"
    }
  ];
  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      description: "Custom AI development and ML solutions",
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="h-5 w-5" />,
      description: "Security audits and compliance",
      color: "from-red-500 to-orange-600"
    },
    {
      name: "Cloud & Infrastructure",
      icon: <Cloud className="h-5 w-5" />,
      description: "Cloud migration and DevOps",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Data & Analytics",
      icon: <Database className="h-5 w-5" />,
      description: "Big data and business intelligence",
      color: "from-emerald-500 to-green-600"
    },
    {
      name: "Digital Transformation",
      icon: <TrendingUp className="h-5 w-5" />,
      description: "Strategic consulting and implementation",
      color: "from-amber-500 to-orange-600"
    },
    {
      name: "Micro SAAS Solutions",
      icon: <Zap className="h-5 w-5" />,
      description: "Custom business applications",
      color: "from-pink-500 to-rose-600"
    }
  ];
  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000"
  ];
  const timelineOptions = [
    "Immediate (1-2 weeks)",
    "Quick (1-2 months)",
    "Standard (3-6 months)",
    "Long-term (6+ months)"
  ];
  return (
    <>
      <SEO 
        title="Contact Zion Tech Group - Get Expert Tech Consultation" 
        description="Contact our team of technology experts for AI, cybersecurity, and digital transformation solutions. Get a free consultation today."
        keywords="contact, consultation, AI services, cybersecurity, tech support, Zion Tech Group"
      />
      <Header />
      <main className="flex-1 relative">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Let's Build Something Amazing Together
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business with cutting-edge technology? 
                Our team of experts is here to help you achieve your goals.
              </p>
              {/* Contact CTA */}
              <div className="bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/30 max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                  <div className="flex items-center text-zion-cyan">
                    <Phone className="h-5 w-5 mr-2" />
                    <span className="font-medium">+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center text-zion-cyan">
                    <Mail className="h-5 w-5 mr-2" />
                    <span className="font-medium">kleber@ziontechgroup.com</span>
                  </div>
                </div>
                <div className="mt-3 text-sm text-zion-slate-light">
                  <MapPin className="h-4 w-4 inline mr-1" />
                  364 E Main St STE 1008, Middletown, DE 19709
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Form & Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border-zion-blue-light bg-zion-blue-dark/50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Get Your Free Consultation</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Tell us about your project and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitSuccess ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                        <p className="text-zion-slate-light">
                          We've received your message and will get back to you within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              First Name *
                            </label>
                            <Input
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Last Name *
                            </label>
                            <Input
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Email *
                            </label>
                            <Input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="john@company.com"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Phone
                            </label>
                            <Input
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-zion-cyan mb-2 block">
                            Company
                          </label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                            placeholder="Your Company Name"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-zion-cyan mb-2 block">
                            Service Interest *
                          </label>
                          <Select value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
                            <SelectTrigger className="bg-zion-blue-dark border-zion-purple/30 text-white">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                              <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                              <SelectItem value="cloud-infrastructure">Cloud & Infrastructure</SelectItem>
                              <SelectItem value="data-analytics">Data & Analytics</SelectItem>
                              <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                              <SelectItem value="micro-saas">Micro SAAS Solutions</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Budget Range
                            </label>
                            <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                              <SelectTrigger className="bg-zion-blue-dark border-zion-purple/30 text-white">
                                <SelectValue placeholder="Select budget" />
                              </SelectTrigger>
                              <SelectContent>
                                {budgetRanges.map((range) => (
                                  <SelectItem key={range} value={range}>{range}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Timeline
                            </label>
                            <Select value={formData.timeline} onValueChange={(value) => handleSelectChange('timeline', value)}>
                              <SelectTrigger className="bg-zion-blue-dark border-zion-purple/30 text-white">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                {timelineOptions.map((option) => (
                                  <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-zion-cyan mb-2 block">
                            Project Details *
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                            placeholder="Tell us about your project, goals, and requirements..."
                          />
                        </div>
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Sending...
                            </div>
                          ) : (
                            <div className="flex items-center">
                              Send Message
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-zion-blue-dark/50 border border-zion-purple/30 ${info.color}`}>
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                          <p className="text-zion-cyan font-medium mb-1">{info.value}</p>
                          <p className="text-sm text-zion-slate-light">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Service Categories */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceCategories.map((service, index) => (
                      <div key={index} className="p-4 bg-zion-blue-dark/50 rounded-lg border border-zion-purple/30 hover:border-zion-purple/50 transition-colors">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                            {service.icon}
                          </div>
                          <h4 className="font-semibold text-white">{service.name}</h4>
                        </div>
                        <p className="text-sm text-zion-slate-light">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Why Choose Us */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">Expert team with 10+ years experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">Proven track record of successful projects</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">Competitive pricing and transparent costs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">24/7 support and ongoing maintenance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">Industry-leading security and compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto text-lg">
              Don't wait to transform your business. Contact us today and let's discuss how we can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                asChild
              >
                <Link to="/request-quote">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Request Free Quote
                </Link>
              </Button>
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Support
                </a>
              </Button>
                              <Button 
                  variant="outline" 
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                  asChild
                >
                  <a href="mailto:kleber@ziontechgroup.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Support
                  </a>
                </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Chat Assistant Modal */}
      {isChatOpen && (
        <ChatAssistant
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          recipient={{
            id: 'ai-assistant',
            name: 'AI Assistant',
            avatarUrl: 'https://placehold.co/64x64?text=AI',
            role: 'Support Bot'
          }}
          onSendMessage={handleSendMessage}
        />
      )}
  );
}
export default Contact;
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Don't wait to transform your business. Contact us today and let's 
                discuss how we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticNeonButton
                  onClick={() => window.location.href = 'tel:+13024640950'}
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Call Now
                </FuturisticNeonButton>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Business Consultation Request'}
                  className="border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan text-lg px-8 py-4"
                >
                  Schedule Consultation
                </Button>
              </div>
            </Card>
      <section className="py-20 px-6 bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue-light/20 to-zion-cyan/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait to transform your business. Contact us today and let's discuss how our 
              revolutionary technology solutions can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Call Now</span>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Email</span>
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and explore how our AI solutions 
            can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Call Us Now
              <Phone className="w-5 h-5 ml-2" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
            >
              Send Email
              <Mail className="w-5 h-5 ml-2" />
            </a>
          </div>
    <>
      <SEO
        title="Contact Zion - Get in Touch"
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform."
        keywords="contact Zion, AI marketplace support, tech platform contact"
        canonical="https://ziontechgroup.com/contact"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Contact Us</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Whether you have a question about our platform, pricing, or anything else, 
                our team is ready to answer all your questions.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="John Doe"
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="john@example.com"
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    placeholder="How can we help you?"
                    required
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px] ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
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
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
              <div className="grid grid-cols-1 gap-6">
                {offices.map((office, index) => (
                  <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light p-6">
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
                        <a href={`mailto:${office.email}`} className="text-zion-cyan hover:underline">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.297199052566!2d-122.41941455!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zion Office Locations"
                ></iframe>
              </div>
              <div className="mt-8">
                <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6">
                  <div className="flex items-center">
                    <div className="bg-zion-purple/20 p-3 rounded-full mr-4">
                      <MessageSquare className="h-6 w-6 text-zion-purple" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold">Live AI Support</h3>
                      <p className="text-zion-slate-light">Get instant answers to your questions</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  >
                    Chat With Our AI Assistant
                  </Button>
                </Card>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need immediate assistance?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              Our customer support team is available 24/7 to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat With AI
              </Button>
              <Button 
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                asChild
              >
                <a href="mailto:support@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      {/* Chat Assistant Modal */}
      {isChatOpen && (
        <ChatAssistant
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          recipient={{
            id: 'ai-assistant',
            name: 'AI Assistant',
            avatarUrl: 'https://placehold.co/64x64?text=AI',
            role: 'Support Bot'
          }}
          onSendMessage={handleSendMessage}
        />
      )}
    </>
  );
}
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 resize-none"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
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
                </motion.button>
              </form>
            </div>
          </motion.div>
          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-8">
              {/* Office Location */}
              <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  Our Office
                </h3>
                <div className="space-y-3 text-zion-slate-light">
                  <p className="text-lg font-medium text-white">Zion Tech Group</p>
                  <p>364 E Main St STE 1008</p>
                  <p>Middletown, DE 19709</p>
                  <p>United States</p>
                </div>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors mt-4"
                >
                  <Globe className="w-4 h-4" />
                  View on Google Maps
                </a>
              </div>
              {/* Business Hours */}
              <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-zion-cyan" />
                  Business Hours
                </h3>
                <div className="space-y-3 text-zion-slate-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white">By Appointment</span>
                  </div>
                  <div className="pt-3 border-t border-zion-purple/20">
                    <p className="text-zion-cyan text-sm">
                      Emergency support available 24/7 for critical issues
                    </p>
                  </div>
                </div>
              </div>
              {/* Why Choose Us */}
              <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
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
              </div>
            </div>
          </motion.div>
        </div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
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
        </motion.div>
      </div>
    </div>
  );
}
}
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Don't wait to transform your business with cutting-edge technology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/get-started" 
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
