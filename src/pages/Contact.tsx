<<<<<<< HEAD
:src/pages/Contact.tsx
import { useState } from 'react';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import {
  logInfo,
  logWarn,
  logErrorToProduction,
} from '@/utils/productionLogger';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import z from 'zod';
import { ChatAssistant } from '@/components/ChatAssistant';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from 'react';

export function Contact() {
=======
import React, { useState } from 'react';
import { useToast } from '../components/ui/use-toast';
import { useNotifications } from '../context/NotificationContext';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const { addNotification } = useNotifications();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
<<<<<<< HEAD
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
=======
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const ContactPage: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-700">Get in touch with our team.</p>
    </div>
  );
};

export default ContactPage;
=======
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our team and let's discuss 
            how we can help you achieve your technology goals.
          </p>
        </div>

<<<<<<< HEAD
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const err of result.error.errors) {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      setErrors(fieldErrors);
      const validationErrorMsg =
        result.error.errors[0]?.message ||
        'Please check your form and try again';
      logWarn('[ContactForm] Validation failed:', {
        data: {
          validationErrorMsg,
          fieldErrors: result.error.flatten().fieldErrors,
        },
      });
=======
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="Tell us about your project..."
                />
              </div>
=======
  const validateForm = () => {
    const errors: string[] = [];
    
    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.email.trim()) errors.push('Email is required');
    if (!formData.message.trim()) errors.push('Message is required');
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (formData.message && formData.message.length < 10) {
      errors.push('Message must be at least 10 characters long');
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast({
        title: "Validation Error",
        description: errors.join(', '),
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
<<<<<<< HEAD
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then(async res => {
          logInfo('[ContactForm] API response status:', { data: res.status });
          const responseBody = await res.text(); // Read as text first to avoid JSON parse error if not JSON
          logInfo('[ContactForm] API response body:', { data: responseBody });

          // Note: setIsSubmitting(false) is called within then/catch of the promise.
          // If fetch itself or .then/.catch structure has a synchronous error,
          // the outer try/catch will handle it.

          if (!res.ok) {
            let errorData = {
              error: `Request failed with status ${res.status}`,
            };
            try {
              errorData = JSON.parse(responseBody);
            } catch (parseError) {
              logWarn('[ContactForm] Could not parse error response as JSON.', {
                data: parseError,
              });
            }
            logErrorToProduction('[ContactForm] API error response:', {
              data: errorData,
            });
            // This throw will be caught by the .catch block below
            throw new Error(errorData.error || 'Failed to send message');
          }

          setIsSubmitting(false); // Moved here for success path
          logInfo('[ContactForm] Message submission successful.');
          toast({
            title: 'Message Sent',
            description:
              "We've received your message and will get back to you soon.",
          });
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 2000);
          setFormData({ name: '', email: '', message: '' });
        })
        .catch(err => {
          // This catches errors from the fetch promise (network, res.ok is false, or manual throw)
          logErrorToProduction('[ContactForm] Fetch promise chain error:', {
            data: err,
          });
          setIsSubmitting(false);
          toast({
            title: 'Submission Error',
            description:
              err.message || 'An unexpected error occurred during submission.',
            variant: 'destructive',
          });
    } catch (error) {
      // This catches synchronous errors that might occur when initiating fetch or in its direct vicinity
      // if not caught by the promise's .catch (less common for typical fetch issues but good for safety)
      logErrorToProduction(
        '[ContactForm] Synchronous error during fetch initiation or processing:',
        { data: error }
      );
      setIsSubmitting(false);
      toast({
        title: 'Critical Submission Error',
        description:
          error instanceof Error
            ? error.message
            : 'An unexpected critical error occurred.',
        variant: 'destructive',
      });
    }
  };

  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch(
        'https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [{ role: 'user', content: message }],
          }),
=======
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success notification
      addNotification({
        type: 'success',
        title: 'Message sent successfully!',
        message: 'Thank you for your message. We\'ll get back to you within 24 hours.',
        duration: 5000,
        action: {
          label: 'View Services',
          onClick: () => window.location.href = '/services'
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        }
      });
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      // Show error notification
      addNotification({
        type: 'error',
        title: 'Error sending message',
        message: 'There was an error sending your message. Please try again.',
        duration: 7000
      });
      
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your business with our technology solutions? Let&apos;s discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
              
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-foreground/70">hello@ziontechgroup.com</p>
                    <p className="text-foreground/70">support@ziontechgroup.com</p>
                  </div>
                </div>
<<<<<<< HEAD
=======

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-services">AI Services</option>
                      <option value="it-services">IT Services</option>
                      <option value="micro-saas">Micro SaaS</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>

:src/pages/Contact.tsx
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                    placeholder="Tell us about your project..."
                  />
<<<<<<< HEAD
                  {errors.message && (
                    <p className='mt-1 text-sm text-red-500'>
                      {errors.message}
                    </p>
                  )}
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

                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}

import React from 'react';

export default function ContactPage() {
  return (
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

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
:src/pages/Contact.tsx
            </div>

<<<<<<< HEAD
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <h2 className='text-3xl font-bold text-white mb-6'>
                      Our Offices
                    </h2>
                  </TooltipTrigger>
                  <TooltipContent>
                    We list several offices so you can connect with the team
                    closest to your region for faster support.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className='grid grid-cols-1 gap-6'>
                {offices.map((office, index) => (
                  <Card
                    key={index}
                    className='bg-zion-blue-dark border border-zion-blue-light p-6'
                  >
                    <h3 className='text-xl font-bold text-white mb-3'>
                      {office.name}
                    </h3>
                    <div className='space-y-3'>
                      <div className='flex items-start'>
                        <MapPin className='w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0' />
                        <span className='text-zion-slate-light'>
                          {office.address}
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <Phone className='w-5 h-5 text-zion-cyan mr-3 flex-shrink-0' />
                        <span className='text-zion-slate-light'>
                          {office.phone}
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <Mail className='w-5 h-5 text-zion-cyan mr-3 flex-shrink-0' />
                        <a
                          href={`mailto:${office.email}`}
                          className='text-zion-cyan hover:underline'
                        >
                          {office.email}
                        </a>
                      </div>
                  </Card>
                ))}
              </div>

              <div className='mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.297199052566!2d-122.41941455!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk'
                  width='100%'
                  height='300'
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='Zion Office Locations'
                ></iframe>
              </div>

              <div className='mt-8'>
                <Card className='bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6'>
                  <div className='flex items-center'>
                    <div className='bg-zion-purple/20 p-3 rounded-full mr-4'>
                      <MessageSquare className='h-6 w-6 text-zion-purple' />
                    </div>
                    <div>
                      <h3 className='text-white text-lg font-bold'>
                        Live AI Support
                      </h3>
                      <p className='text-zion-slate-light'>
                        Get instant answers to your questions
                      </p>
                    </div>
                  <Button
                    onClick={() => setIsChatOpen(true)}
                    className='w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple'
                  >
                    Chat With Our AI Assistant
                  </Button>
                </Card>
              </div>
=======
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-foreground/70">+1 (555) 123-4567</p>
                    <p className="text-foreground/70">+1 (555) 987-6543</p>
                  </div>
                </div>
<<<<<<< HEAD
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-foreground/70">
                      123 Technology Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                    <p className="text-foreground/70">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com/ziontechgroup" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-lg">🐦</span>
                </a>
<<<<<<< HEAD
              </Button>
            </div>
=======
                <a href="https://linkedin.com/company/ziontechgroup" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-lg">💼</span>
                </a>
                <a href="https://github.com/ziontechgroup" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-lg">🐙</span>
                </a>
                <a href="https://youtube.com/ziontechgroup" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-lg">📺</span>
                </a>
=======
              </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Expert team with 10+ years experience
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Proven track record of successful projects
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 support and maintenance
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Competitive pricing and flexible terms
                  </li>
                </ul>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
              </div>
            </div>
          </div>
<<<<<<< HEAD
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
            role: 'Support Bot',
          }}
          onSendMessage={handleSendMessage}
          starterQuestions={[
            'How do I list a product?',
            'What services does Zion offer?',
            'Where can I view pricing plans?',
            'How do I create an account?',
            'Can I talk to a human representative?',
          ]}
        />
      )}
    </>
  );

            </div>
      </section>
    </div>
  );
=======
        </div>
      </div>
    </div>
  );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
