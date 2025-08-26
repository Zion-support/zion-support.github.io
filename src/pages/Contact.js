import React from 'react';

export default function Contact() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-6">Contact Us</h1>
                <p className="text-lg text-muted-foreground mb-4">
                    Get in touch with Zion Tech Group for your technology needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                        <div className="space-y-3 text-muted-foreground">
                            <p>Email: contact@ziontechgroup.com</p>
                            <p>Phone: +1 (555) 123-4567</p>
                            <p>Address: 123 Tech Street, Innovation City, IC 12345</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Send us a Message</h2>
                        <form className="space-y-4">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                            />
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                            />
                            <textarea 
                                placeholder="Your Message" 
                                rows="4"
                                className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                            ></textarea>
                            <button 
                                type="submit"
                                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md hover:bg-primary/90"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
