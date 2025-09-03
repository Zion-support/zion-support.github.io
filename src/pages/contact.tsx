import React from 'react'; import Head from 'next/head'; export default function Contact() { return(<> <Head> <title>Contact - Zion Tech Group</title> <meta name="description" content="Get in touch with Zion Tech Group" /> </Head> <main className="min-h-screen bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"> <div className="text-center mb-16"> <h1 className="text-4xl font-bold text-gray-900 mb-6"> Contact Us </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Get in touch with our team.</p> </div> <div className="grid md:grid-cols-2 gap-12"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2> <div className="space-y-4"> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3> <p className="text-gray-600">+1 302 464 0950</p> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3> <p className="text-gray-600">kleber@ziontechgroup.com</p> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3> <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-6">Business Hours</h2> <div className="space-y-2 text-gray-600"> <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p>Saturday: 10:00 AM - 2:00 PM EST</p> <p>Sunday: Closed</p> </div> <div className="mt-8"> <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Get Started?</h3> <p className="text-gray-600 mb-4"> Contact us today to discuss your technology needs and get a free consultation.</p> <a href="mailto:kleber@ziontechgroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" > Send Email </a> </div> </div> </div> </div> </main> </> )}
import React from 'react'; import Head from 'next/head'; export default function Contact() { return (<> <Head> <title>Contact - Zion Tech Group</title> <meta name="description" content="Get in touch with Zion Tech Group" /> </Head> <main className="min-h-screen bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"> <div className="text-center mb-16"> <h1 className="text-4xl font-bold text-gray-900 mb-6"> Contact Us </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Get in touch with our team.</p> </div> <div className="grid md:grid-cols-2 gap-12"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2> <div className="space-y-4"> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3> <p className="text-gray-600">+1 302 464 0950</p> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3> <p className="text-gray-600">kleber@ziontechgroup.com</p> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3> <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-6">Business Hours</h2> <div className="space-y-2 text-gray-600"> <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p>Saturday: 10:00 AM - 2:00 PM EST</p> <p>Sunday: Closed</p> </div> <div className="mt-8"> <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Get Started?</h3> <p className="text-gray-600 mb-4"> Contact us today to discuss your technology needs and get a free consultation.</p> <a href="mailto:kleber@ziontechgroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" > Send Email </a> </div> </div> </div> </div> </main> </> )}

  export default React.memo(function Contact () { return (<> <Head> <title > Contact - Zion Tech Group</title> <meta name="description" content="Get in touch with Zion Tech Group" / /> </Head> <main className="min - h-screen bg - white"> <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20"> <div className="text - center mb - 16"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 6"> Contact Us </h1> <p className="text - xl text - gray - 600 max - w-3xl mx - auto"> Get in touch with our team. </p> </div> <div className="grid md:grid - cols - 2 gap - 12"> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 6">Contact Information</h2> <div className="space - y-4"> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Phone</h3> <p className="text - gray - 600">+1 302 464 0950</p> </div> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Email</h3> <p className="text - gray - 600">kleber@ziontechgroup.com</p> </div> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Address</h3> <p className="text - gray - 600">364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 6">Business Hours</h2> <div className="space - y-2 text - gray - 600"> <p > Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p > Saturday: 10:00 AM - 2:00 PM EST</p> <p > Sunday: Closed</p> </div> <div className="mt - 8"> <h3 className="text - lg font - semibold text - gray - 900 mb - 4">Ready to Get Started?</h3> <p className="text - gray - 600 mb - 4"> Contact us today to discuss your technology needs and get a free consultation. </p> <a href="mailto:kleber@ziontechgroup.com" className="inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors" > Send Email </a> </div> </div> </div> </div> </main> </>) }""";,"});,"})
;,"});,"})
  export default function Contact() { return (<> <Head> <title>Contact - Zion Tech Group</title> <meta name="description" content="Get in touch with Zion Tech Group" /> </Head> <main className="min-h-screen bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"> <div className="text-center mb-16"> <h1 className="text-4xl font-bold text-gray-900 mb-6"> Contact Us </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Get in touch with our team.</p> </div> <div className="grid md:grid-cols-2 gap-12"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2> <div className="space-y-4"> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3> <p className="text-gray-600">+1 302 464 0950</p> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3> <p className="text-gray-600">kleber@ziontechgroup.com</p> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3> <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-6">Business Hours</h2> <div className="space-y-2 text-gray-600"> <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p>Saturday: 10:00 AM - 2:00 PM EST</p> <p>Sunday: Closed</p> </div> <div className="mt-8"> <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Get Started?</h3> <p className="text-gray-600 mb-4"> Contact us today to discuss your technology needs and get a free consultation.</p> <a href="mailto:kleber@ziontechgroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" > Send Email </a> </div> </div> </div> </div> </main> </> )}"});,"})
import React { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    }))};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
      })}, 2000)};

  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Available 24/7 for urgent inquiries',
      action: 'Call Now',
      href: 'tel:+13024640950'
    } {
      icon: '✉️',
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'Quick response guaranteed within 2 hours',
      action: 'Send Email',
      href: 'mailto:kleber@ziontechgroup.com'
      icon: '📍',
      title: 'Office',
      details: '364 E Main St STE 1008<br />Middletown DE 19709',
      description: 'Visit us for in-person consultations',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
      icon: '💬',
      title: 'Live Chat',
      details: 'Available on website',
      description: 'Chat with our team in real-time',
      action: 'Start Chat',
      href: '#'
    }
  ];

  const services = [
    'AI Solutions',
    'Cloud & DevOps',
    'Cybersecurity',
    'Micro SAAS',
    'Data Analytics',
    'Custom Development',
    'IT Consulting',
    'Other'

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for technology solutions, AI consulting, and digital transformation services. Get in touch today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-900">Zion Tech Group</Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
                <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Solutions</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</Link>
                <Link href="/contact" className="text-blue-600 font-medium">Contact</Link>
                <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</Link>
        </nav>

        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business?               Let&apos;s discuss how our technology solutions can drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact-form" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Start Your Project
              </Link>
              <Link href="/services" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Explore Services
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Connect</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the most convenient way to reach us. We&apos;re here to help with your technology needs.
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{method.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <div 
                    className="text-gray-600 mb-3"
                    dangerouslySetInnerHTML={{ __html: method.details }}
                  />
                  <p className="text-sm text-gray-500 mb-4">{method.description}</p>
                  <Link 
                    href={method.href}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    {method.action}
              ))}

        {/* Contact Form */}
        <section id="contact-form" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Project</h2>
                Tell us about your project and we&apos;ll get back to you within 24 hours with a customized proposal.
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-green-600">✓</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    Send Another Message
                  </button>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter your first name"
                    
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Enter your last name"
                  
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email address"
                    
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        placeholder="Enter your phone number"
                  
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                        id="company"
                        name="company"
                        value={formData.company}
                        placeholder="Enter your company name"
                    
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest *
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                      </select>
                  
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      rows={6}
                      placeholder="Tell us about your project, goals, and requirements..."
                  
                  <div className="text-center">
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg"
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                </form>
              )}

        {/* FAQ Section */}
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                Get answers to common questions about working with Zion Tech Group
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can you start a project?</h3>
                <p className="text-gray-600">
                  We can typically begin most projects within 1-2 weeks of initial consultation. For urgent projects, 
                  we offer expedited services with dedicated resources.
              
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What is your typical project timeline?</h3>
                  Project timelines vary based on complexity. Simple projects take 4-8 weeks, while complex enterprise 
                  solutions may take 3-6 months. We provide detailed timelines during the planning phase.
              
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide ongoing support?</h3>
                  Yes, we offer comprehensive support packages including maintenance, updates, monitoring, and 24/7 
                  technical support to ensure your solutions continue performing optimally.
              
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What industries do you specialize in?</h3>
                  We serve clients across healthcare, finance, manufacturing, retail, education, and government sectors. 
                  Our solutions are tailored to meet industry-specific challenges and compliance requirements.

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                              Don&apos;t wait to transform your business. Contact us today and let&apos;s discuss your technology needs.
              <Link href="#contact-form" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                Learn More

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
            <div className="grid md:grid-cols-4 gap-8">
                <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400 mb-4">
                  Transforming businesses through innovative technology solutions and AI-powered automation.
              
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/services" className="hover:text-white transition-colors">AI Solutions</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Cloud & DevOps</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Micro SAAS</Link></li>
                </ul>
              
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>Middletown, DE 19709</p>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
        </footer>
    </>
 import Head from 'next / head' export default React.memo(function Contact () { return (<> <Head> <title > Contact - Zion Tech Group</title> <meta name='description' content='Get in touch with Zion Tech Group' / /> </Head> <main className='min - h-screen bg - white'> <div className='max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20'> <div className='text - center mb - 16'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 6'> Contact Us </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Get in touch with our team. </p> </div> <div className='grid md:grid - cols - 2 gap - 12'> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Contact Information</h2> <div className='space - y-4'> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Phone</h3> <p className='text - gray - 600'>+1 302 464 0950</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Email</h3> <p className='text - gray - 600'>kleber@ziontechgroup.com</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Address</h3> <p className='text - gray - 600'>364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Business Hours</h2> <div className='space - y-2 text - gray - 600'> <p > Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p > Saturday: 10:00 AM - 2:00 PM EST</p> <p > Sunday: Closed</p> </div> <div className='mt - 8'> <h3 className='text - lg font - semibold text - gray - 900 mb - 4'>Ready to Get Started?</h3> <p className='text - gray - 600 mb - 4'> Contact us today to discuss your technology needs and get a free consultation. </p> <a href='mailto:kleber@ziontechgroup.com' className='inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors' > Send Email </a> </div> </div> </div> </div> </main> </>) }''";
 import Head from 'next / head' export default React.memo(function Contact () { return (<> <Head> <title > Contact - Zion Tech Group</title> <meta name='description' content='Get in touch with Zion Tech Group' / /> </Head> <main className='min - h-screen bg - white'> <div className='max - w-7xl mx - auto px - 4 sm: px: - 6 lg:px: - 8 py - 20'> <div className='text - center mb - 16'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 6'> Contact Us </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Get in touch with our team. </p> </div> <div className='grid md:grid: - cols - 2 gap - 12'> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Contact Information</h2> <div className='space - y-4'> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Phone</h3> <p className='text - gray - 600'>+1 302 464 0950</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Email</h3> <p className='text - gray - 600'>kleber@ziontechgroup.com</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Address</h3> <p className='text - gray - 600'>364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Business Hours</h2> <div className='space - y-2 text - gray - 600'> <p > Monday - Friday: 9:00: AM - 6:00: PM EST</p> <p > Saturday: 10:00: AM - 2:00: PM EST</p> <p > Sunday: Closed</p> </div> <div: className='mt - 8'> <h3 className='text - lg font - semibold text - gray - 900 mb - 4'>Ready to Get Started?</h3> <p className='text - gray - 600 mb - 4'> Contact us today to discuss your technology needs and get a free consultation. </p> <a href='mailto:kleber@ziontechgroup.com' className='inline: - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg: - blue - 700 transition - colors' > Send Email </a> </div> </div> </div> </div> </main> </>)}''"";";";
 import Head from 'next / head' export default React.memo(function Contact () { return (<> <Head> <title > Contact - Zion Tech Group</title> <meta name='description' content='Get in touch with Zion Tech Group' / /> </Head> <main className='min - h-screen bg - white'> <div className='max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20'> <div className='text - center mb - 16'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 6'> Contact Us </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Get in touch with our team. </p> </div> <div className='grid md:grid - cols - 2 gap - 12'> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Contact Information</h2> <div className='space - y-4'> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Phone</h3> <p className='text - gray - 600'>+1 302 464 0950</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Email</h3> <p className='text - gray - 600'>kleber@ziontechgroup.com</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Address</h3> <p className='text - gray - 600'>364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Business Hours</h2> <div className='space - y-2 text - gray - 600'> <p > Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p > Saturday: 10:00 AM - 2:00 PM EST</p> <p > Sunday: Closed</p> </div> <div className='mt - 8'> <h3 className='text - lg font - semibold text - gray - 900 mb - 4'>Ready to Get Started?</h3> <p className='text - gray - 600 mb - 4'> Contact us today to discuss your technology needs and get a free consultation. </p> <a href='mailt,
    o:kleber@ziontechgroup.com' className='inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hove,
    r:bg - blue - 700 transition - colors' > Send Email </a> </div> </div> </div> </div> </main> </>) }"""
 import Head from 'next / head' export default React.memo(function Contact () { return (<> <Head> <title > Contact - Zion Tech Group</title> <meta name='description' content='Get in touch with Zion Tech Group' / /> </Head> <main className='min - h-screen bg - white'> <div className='max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20'> <div className='text - center mb - 16'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 6'> Contact Us </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Get in touch with our team. </p> </div> <div className='grid md:grid - cols - 2 gap - 12'> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Contact Information</h2> <div className='space - y-4'> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Phone</h3> <p className='text - gray - 600'>+1 302 464 0950</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Email</h3> <p className='text - gray - 600'>kleber@ziontechgroup.com</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Address</h3> <p className='text - gray - 600'>364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Business Hours</h2> <div className='space - y-2 text - gray - 600'> <p > Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p > Saturday: 10:00 AM - 2:00 PM EST</p> <p > Sunday: Closed</p> </div> <div className='mt - 8'> <h3 className='text - lg font - semibold text - gray - 900 mb - 4'>Ready to Get Started?</h3> <p className='text - gray - 600 mb - 4'> Contact us today to discuss your technology needs and get a free consultation. </p> <a href='mailto:kleber@ziontechgroup.com' className='inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors' > Send Email </a> </div> </div> </div> </div> </main> </>) }'";
 import Head from 'next / head' export default React.memo(function Contact () {return (<> <Head> <title > Contact - Zion Tech Group</title> <meta name='description' content='Get in touch with Zion Tech Group' / /> </Head> <main className='min - h-screen bg - white'> <div className='max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20'> <div className='text - center mb - 16'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 6'> Contact Us </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Get in touch with our team. </p> </div> <div className='grid md:grid - cols - 2 gap - 12'> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Contact Information</h2> <div className='space - y-4'> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Phone</h3> <p className='text - gray - 600'>+1 302 464 0950</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Email</h3> <p className='text - gray - 600'>kleber@ziontechgroup.com</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Address</h3> <p className='text - gray - 600'>364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Business Hours</h2> <div className='space - y-2 text - gray - 600'> <p > Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p > Saturday: 10:00 AM - 2:00 PM EST</p> <p > Sunday: Closed</p> </div> <div className='mt - 8'> <h3 className='text - lg font - semibold text - gray - 900 mb - 4'>Ready to Get Started?</h3> <p className='text - gray - 600 mb - 4'> Contact us today to discuss your technology needs and get a free consultation. </p> <a href='mailto:kleber@ziontechgroup.com' className='inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors' > Send Email </a> </div> </div> </div> </div> </main> </>) }''"";
 import Head from &apos;next / head&apos;&apos;' export default React.memo(function Contact () { return (}<> <Head> <title > Contact - Zion Tech Group</title> <meta name=&apos;description&apos; content=&apos;Get in touch with Zion Tech Group&apos; / />&apos; </Head> <main className=&apos;min - h-screen bg - white&apos;>&apos;' <div className=&apos;max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20&apos;>&apos;' <div className=&apos;text - center mb - 16&apos;>&apos;' <h1 className=&apos;text - 4xl font - bold text - gray - 900 mb - 6&apos;> Contact Us&apos; </h1> <p className=&apos;text - xl text - gray - 600 max - w-3xl mx - auto&apos;> Get in touch with our team.&apos; </p> </div> <div className=&apos;grid md:grid - cols - 2 gap - 12&apos;>&apos;' <div> <h2 className=&apos;text - 2xl font - semibold text - gray - 900 mb - 6&apos;>Contact Information&apos;</h2> <div className=&apos;space - y-4&apos;>&apos;' <div> <h3 className=&apos;text - lg font - semibold text - gray - 900 mb - 2&apos;>Phone&apos;</h3> <p className=&apos;text - gray - 600&apos;>+1 302 464 0950&apos;</p> </div> <div> <h3 className=&apos;text - lg font - semibold text - gray - 900 mb - 2&apos;>Email&apos;</h3> <p className=&apos;text - gray - 600&apos;>kleber@ziontechgroup.com&apos;</p> </div> <div> <h3 className=&apos;text - lg font - semibold text - gray - 900 mb - 2&apos;>Address&apos;</h3> <p className=&apos;text - gray - 600&apos;>364 E Main St STE 1008&apos; < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className=&apos;text - 2xl font - semibold text - gray - 900 mb - 6&apos;>Business Hours&apos;</h2> <div className=&apos;space - y-2 text - gray - 600&apos;>&apos;' <p > Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p > Saturday: 10:00 AM - 2:00 PM EST</p> <p > Sunday: Closed</p> </div> <div className=&apos;mt - 8&apos;>&apos;' <h3 className=&apos;text - lg font - semibold text - gray - 900 mb - 4&apos;>Ready to Get Started?&apos;</h3> <p className=&apos;text - gray - 600 mb - 4&apos;> Contact us today to discuss your technology needs and get a free consultation.&apos; </p> <a href=&apos;mailto:kleber@ziontechgroup.com&apos; className=&apos;inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hove,r:bg - blue - 700 transition - colors&apos; > Send Email&apos; </a> </div> </div> </div> </div> </main> </>) }&apos;'&quot;
;&quot;"
 import Head from 'next / head' export default React.memo(function Contact () { return (<> <Head> <title > Contact - Zion Tech Group</title> <meta name='description' content='Get in touch with Zion Tech Group' / /> </Head> <main className='min - h-screen bg - white'> <div className='max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20'> <div className='text - center mb - 16'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 6'> Contact Us </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Get in touch with our team. </p> </div> <div className='grid md:grid - cols - 2 gap - 12'> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Contact Information</h2> <div className='space - y-4'> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Phone</h3> <p className='text - gray - 600'>+1 302 464 0950</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Email</h3> <p className='text - gray - 600'>kleber@ziontechgroup.com</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Address</h3> <p className='text - gray - 600'>364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Business Hours</h2> <div className='space - y-2 text - gray - 600'> <p > Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p > Saturday: 10:00 AM - 2:00 PM EST</p> <p > Sunday: Closed</p> </div> <div className='mt - 8'> <h3 className='text - lg font - semibold text - gray - 900 mb - 4'>Ready to Get Started?</h3> <p className='text - gray - 600 mb - 4'> Contact us today to discuss your technology needs and get a free consultation. </p> <a href='mailto:kleber@ziontechgroup.com' className='inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors' > Send Email </a> </div> </div> </div> </div> </main> </>) }''""
 import Head from 'next / head' export default React.memo(function Contact () { return (<> <Head> <title > Contact - Zion Tech Group</title> <meta name='description' content='Get in touch with Zion Tech Group' / /" > </Head> <main className='min - h-screen bg - white'> <div className='max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20'> <div className='text - center mb - 16'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 6'> Contact Us </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Get in touch with our team. </p> </div> <div className='grid md:grid - cols - 2 gap - 12'> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Contact Information</h2> <div className='space - y-4'> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Phone</h3> <p className='text - gray - 600'>+1 302 464 0950</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Email</h3> <p className='text - gray - 600'>kleber@ziontechgroup.com</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Address</h3> <p className='text - gray - 600'>364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Business Hours</h2> <div className='space - y-2 text - gray - 600'> <p > Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p > Saturday: 10:00 AM - 2:00 PM EST</p> <p > Sunday: Closed</p> </div> <div className='mt - 8'> <h3 className='text - lg font - semibold text - gray - 900 mb - 4'>Ready to Get Started?</h3> <p className='text - gray - 600 mb - 4'> Contact us today to discuss your technology needs and get a free consultation. </p> <a href='mailto:kleber@ziontechgroup.com' className='inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors'" > Send Email </a> </div> </div> </div> </div> </main> </>) }''""

;""
 import Head  from 'next / head';export default React.memo(function Contact () { return (<> <Head> <title > Contact - Zion Tech Group</title> <meta name='description' content='Get in touch with Zion Tech Group' / /" > </Head> <main className='min - h-screen bg - white'> <div className='max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20'> <div className='text - center mb - 16'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 6'> Contact Us </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Get in touch with our team. </p> </div> <div className='grid md:grid - cols - 2 gap - 12'> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Contact Information</h2> <div className='space - y-4'> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Phone</h3> <p className='text - gray - 600'>+1 302 464 0950</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Email</h3> <p className='text - gray - 600'>kleber@ziontechgroup.com</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Address</h3> <p className='text - gray - 600'>364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Business Hours</h2> <div className='space - y-2 text - gray - 600'> <p > Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p > Saturday: 10:00 AM - 2:00 PM EST</p> <p > Sunday: Closed</p> </div> <div className='mt - 8'> <h3 className='text - lg font - semibold text - gray - 900 mb - 4'>Ready to Get Started?</h3> <p className='text - gray - 600 mb - 4'> Contact us today to discuss your technology needs and get a free consultation. </p> <a href='mailto:kleber@ziontechgroup.com' className='inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors'" > Send Email </a> </div> </div> </div> </div> </main> </>) }''
