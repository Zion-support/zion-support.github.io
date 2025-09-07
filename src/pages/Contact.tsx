<<<<<<< HEAD
import React, { useState } from 'react';
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
=======


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
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
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
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
                >
                  Send Message
                </button>
            
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
              