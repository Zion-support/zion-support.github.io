import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { toast } from "@/components/ui/use-toast";
import z from "zod";
import { ChatAssistant } from "@/components/ChatAssistant/ChatAssistant";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const schema = z.object({
            name: z.string().min(2, "Name must be at least 2 characters"),
            email: z.string().email("Invalid email address"),
            subject: z.string().min(2, "Subject must be at least 2 characters"),
            message: z.string().min(10, "Message must be at least 10 characters"),
        });

        const result = schema.safeParse(formData);
        if (!result.success) {
            const fieldErrors = {};
            for (const err of result.error.errors) {
                if (err.path[0]) {
                    fieldErrors[err.path[0]] = err.message;
                }
            }
            setErrors(fieldErrors);
            toast({
                title: "Form Validation Error",
                description: result.error.errors[0].message,
                variant: "destructive",
            });
            return;
        }

        setErrors({});
        // Simulate form submission
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: "Message Sent",
                description: "We've received your message and will get back to you soon.",
            });
            // Reset form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        }, 1500);
    };

    // Handle sending messages to the AI chat assistant
    const handleSendMessage = async (message) => {
        try {
            const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
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

    const offices = [
        {
            name: "Headquarters",
            address: "364 E Main St STE 1008",
            city: "Middletown, DE 19709",
            phone: "+1 302 464 0950",
            email: "kleber@ziontechgroup.com"
        }
    ];

    return (
        <>
            <SEO 
                title="Contact Us - Zion Tech Group" 
                description="Get in touch with Zion Tech Group. Contact our team for AI solutions, IT services, and technology consulting." 
                canonical="https://ziontechgroup.com/contact" 
            />
            
            <main className="min-h-screen bg-zion-blue pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <GradientHeading>Contact Us</GradientHeading>
                        <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
                            Ready to transform your business with cutting-edge technology? Get in touch with our team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <Card className="p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={errors.name ? "border-red-500" : ""}
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? "border-red-500" : ""}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <Input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={errors.subject ? "border-red-500" : ""}
                                        />
                                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                    </div>

                                    <div>
                                        <Textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={errors.message ? "border-red-500" : ""}
                                        />
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                    </div>

                                    <Button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                                <p className="text-zion-slate-light text-lg mb-8">
                                    We're here to help you navigate the future of technology. Whether you have questions about our services or want to discuss a project, our team is ready to assist.
                                </p>
                            </div>

                            {/* Office Information */}
                            {offices.map((office, index) => (
                                <Card key={index} className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">{office.name}</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center text-zion-slate-light">
                                            <MapPin className="h-5 w-5 mr-3 text-zion-cyan" />
                                            <div>
                                                <p>{office.address}</p>
                                                <p>{office.city}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-zion-slate-light">
                                            <Phone className="h-5 w-5 mr-3 text-zion-cyan" />
                                            <a href={`tel:${office.phone}`} className="hover:text-zion-cyan transition-colors">
                                                {office.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center text-zion-slate-light">
                                            <Mail className="h-5 w-5 mr-3 text-zion-cyan" />
                                            <a href={`mailto:${office.email}`} className="hover:text-zion-cyan transition-colors">
                                                {office.email}
                                            </a>
                                        </div>
                                    </div>
                                </Card>
                            ))}

                            {/* Quick Actions */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-white">Quick Actions</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Button 
                                        variant="outline" 
                                        className="w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light"
                                        onClick={() => setIsChatOpen(true)}
                                    >
                                        <MessageSquare className="h-4 w-4 mr-2" />
                                        Chat with AI
                                    </Button>
                                    <Button 
                                        variant="outline" 
                                        className="w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light"
                                    >
                                        <Mail className="h-4 w-4 mr-2" />
                                        Schedule Call
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <ChatAssistant 
                isOpen={isChatOpen} 
                onClose={() => setIsChatOpen(false)}
                onSendMessage={handleSendMessage}
            />
        </>
    );
}
