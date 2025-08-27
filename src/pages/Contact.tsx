import React, { useState } from 'react';
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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Have questions about our AI marketplace platform? Want to learn more about our services? 
                            We're here to help you succeed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                        {/* Contact Form */}
                        <Card className="bg-slate-800/50 border-slate-700">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-6 text-zion-cyan">Send us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`bg-slate-700 border-slate-600 text-white placeholder-slate-400 ${errors.name ? 'border-red-500' : ''}`}
                                        />
                                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                                    </div>
                                    
                                    <div>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`bg-slate-700 border-slate-600 text-white placeholder-slate-400 ${errors.email ? 'border-red-500' : ''}`}
                                        />
                                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                    
                                    <div>
                                        <Input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`bg-slate-700 border-slate-600 text-white placeholder-slate-400 ${errors.subject ? 'border-red-500' : ''}`}
                                        />
                                        {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                                    </div>
                                    
                                    <div>
                                        <Textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`bg-slate-700 border-slate-600 text-white placeholder-slate-400 resize-none ${errors.message ? 'border-red-500' : ''}`}
                                        />
                                        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                                    </div>
                                    
                                    <Button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center">
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Sending...
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center">
                                                <Send className="mr-2 h-5 w-5" />
                                                Send Message
                                            </div>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-zion-cyan">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-zion-cyan/20 p-3 rounded-lg">
                                            <Mail className="h-6 w-6 text-zion-cyan" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">Email</h3>
                                            <p className="text-slate-300">commercial@ziontechgroup.com</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-zion-purple/20 p-3 rounded-lg">
                                            <Phone className="h-6 w-6 text-zion-purple" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">Phone</h3>
                                            <p className="text-slate-300">+1 (302) 464-0950</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-zion-green/20 p-3 rounded-lg">
                                            <MapPin className="h-6 w-6 text-zion-green" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">Address</h3>
                                            <p className="text-slate-300">364 E Main St STE 1008, Middletown, DE 19709</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4 text-zion-cyan">Office Locations</h3>
                                <div className="space-y-4">
                                    {offices.map((office, index) => (
                                        <Card key={index} className="bg-slate-800/50 border-slate-700">
                                            <CardContent className="p-4">
                                                <h4 className="font-semibold text-white mb-2">{office.name}</h4>
                                                <p className="text-slate-300 text-sm mb-1">{office.address}</p>
                                                <p className="text-slate-300 text-sm mb-1">{office.phone}</p>
                                                <p className="text-slate-300 text-sm">{office.email}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Contact Methods */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-8 text-zion-cyan">Other Ways to Connect</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="bg-slate-800/50 border-slate-700 hover:border-zion-cyan/50 transition-colors duration-300">
                                <CardContent className="p-6 text-center">
                                    <div className="bg-zion-cyan/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <MessageSquare className="h-8 w-8 text-zion-cyan" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
                                    <p className="text-slate-300 mb-4">Get instant help from our support team</p>
                                    <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                                        Start Chat
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="bg-slate-800/50 border-slate-700 hover:border-zion-purple/50 transition-colors duration-300">
                                <CardContent className="p-6 text-center">
                                    <div className="bg-zion-purple/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <Phone className="h-8 w-8 text-zion-purple" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
                                    <p className="text-slate-300 mb-4">Speak directly with our experts</p>
                                    <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                                        Call Now
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="bg-slate-800/50 border-slate-700 hover:border-zion-green/50 transition-colors duration-300">
                                <CardContent className="p-6 text-center">
                                    <div className="bg-zion-green/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <Mail className="h-8 w-8 text-zion-green" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
                                    <p className="text-slate-300 mb-4">Send us detailed inquiries</p>
                                    <Button variant="outline" className="border-zion-green text-zion-green hover:bg-zion-green hover:text-white">
                                        Send Email
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
