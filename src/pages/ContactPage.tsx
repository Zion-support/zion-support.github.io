import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
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
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email Us",
            details: ["info@ziontechgroup.com", "support@ziontechgroup.com"],
            description: "Send us an email and we'll respond within 24 hours"
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Call Us",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
            description: "Speak directly with our team during business hours"
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Visit Us",
            details: ["123 Tech Street", "San Francisco, CA 94105"],
            description: "Our headquarters in the heart of Silicon Valley"
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: "Business Hours",
            details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
            description: "We're here to help during these hours"
        }
    ];

    const services = [
        "AI & Machine Learning",
        "Cloud Infrastructure",
        "Cybersecurity",
        "Mobile Development",
        "Web Development",
        "Data Analytics",
        "IoT Solutions",
        "Blockchain Services",
        "Consulting",
        "Other"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <SEO 
                title="Contact Us - Zion Tech Group"
                description="Get in touch with Zion Tech Group for AI, cloud, and technology solutions. We're here to help transform your business."
                keywords="contact, support, AI services, technology consulting, cloud solutions"
            />
            
            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                    >
                        Ready to transform your business with cutting-edge technology? Let's discuss how we can help you achieve your goals.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-800/50 p-8 rounded-lg border border-slate-700"
                    >
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        
                        {submitStatus === 'success' && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-green-600/20 border border-green-500 rounded-lg flex items-center gap-3"
                            >
                                <CheckCircle className="h-5 w-5 text-green-400" />
                                <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-red-600/20 border border-red-500 rounded-lg flex items-center gap-3"
                            >
                                <AlertCircle className="h-5 w-5 text-red-400" />
                                <span className="text-red-400">There was an error sending your message. Please try again.</span>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                                        placeholder="Your company name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium mb-2">
                                    Service Interest
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                >
                                    <option value="">Select a service</option>
                                    {services.map((service, index) => (
                                        <option key={index} value={service}>{service}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                                    placeholder="Tell us about your project or how we can help you..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700"
                                    >
                                        <div className="text-blue-400 mt-1">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                                            {info.details.map((detail, detailIndex) => (
                                                <p key={detailIndex} className="text-gray-300 mb-1">{detail}</p>
                                            ))}
                                            <p className="text-sm text-gray-400 mt-2">{info.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Response Promise */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg"
                        >
                            <h3 className="text-xl font-bold mb-3">Our Promise</h3>
                            <ul className="space-y-2 text-blue-100">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4" />
                                    Response within 24 hours
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4" />
                                    Free initial consultation
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4" />
                                    Customized solutions for your needs
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4" />
                                    Ongoing support and maintenance
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}