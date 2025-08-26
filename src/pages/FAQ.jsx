import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronRight, MessageCircle, BookOpen } from 'lucide-react';

export default function FAQ() {
    const [openItems, setOpenItems] = useState(new Set());

    const toggleItem = (itemId) => {
        setOpenItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(itemId)) {
                newSet.delete(itemId);
            } else {
                newSet.add(itemId);
            }
            return newSet;
        });
    };

    const faqData = [
        {
            question: "What is Zion Tech Group?",
            answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented professionals with innovative companies, offering a comprehensive platform for AI services, tech talent, and specialized equipment."
        },
        {
            question: "How does the marketplace work?",
            answer: "Our marketplace operates as a two-sided platform where businesses can find AI talent, services, and equipment, while professionals can showcase their skills and find opportunities. All basic listings and connections are completely free."
        },
        {
            question: "What types of services are available?",
            answer: "We offer a wide range of services including AI development, machine learning consulting, software development, IT consulting, data analysis, cloud services, cybersecurity, and specialized IT onsite services."
        },
        {
            question: "How do I find the right talent for my project?",
            answer: "You can browse our talent directory, use our AI-powered matching system, post job listings, or request quotes for specific projects. Our platform includes detailed profiles, skill assessments, and verified reviews to help you make informed decisions."
        },
        {
            question: "What equipment and hardware is available?",
            answer: "Our marketplace includes specialized AI hardware, servers, networking equipment, development tools, and other tech equipment. We also feature Green IT solutions for sustainable technology practices."
        },
        {
            question: "Is there a cost to use the platform?",
            answer: "Basic access to our marketplace is completely free. This includes browsing listings, creating profiles, and making initial connections. Premium features and advanced tools are available through our enterprise plans."
        },
        {
            question: "How do you ensure quality and reliability?",
            answer: "We implement a comprehensive verification system including profile verification, skill assessments, client reviews, and dispute resolution processes. Our community-driven approach helps maintain high standards across the platform."
        },
        {
            question: "What support is available for users?",
            answer: "We provide 24/7 customer support through our chat system, email support, and comprehensive help center. Enterprise clients also receive dedicated account management and priority support."
        },
        {
            question: "Can I use Zion for both hiring and finding work?",
            answer: "Yes! Many users maintain both client and talent profiles, allowing them to hire for projects while also offering their own services. This flexibility makes Zion ideal for freelancers, agencies, and growing companies."
        },
        {
            question: "How do you handle payments and contracts?",
            answer: "We provide secure payment processing, milestone-based payment systems, and contract templates. Our platform supports various payment methods and includes built-in dispute resolution for project protection."
        },
        {
            question: "What makes Zion different from other platforms?",
            answer: "Zion is specifically designed for AI and high-tech industries, offering specialized tools, AI-powered matching, comprehensive equipment listings, and a focus on sustainable technology. Our free model makes advanced tech accessible to businesses of all sizes."
        },
        {
            question: "How can I get started on Zion?",
            answer: "Getting started is simple! Create a free account, complete your profile, and start exploring the marketplace. You can immediately browse listings, connect with professionals, or showcase your own services and expertise."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mb-6">
                            <HelpCircle className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Find answers to the most common questions about Zion Tech Group and our marketplace platform
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full text-left px-6 py-4 text-white hover:text-cyan-400 transition-colors duration-300 flex items-center justify-between"
                                >
                                    <span className="text-lg font-medium">{item.question}</span>
                                    {openItems.has(index) ? (
                                        <ChevronDown className="w-5 h-5 text-cyan-400" />
                                    ) : (
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    )}
                                </button>
                                {openItems.has(index) && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-300 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Still have questions?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Can't find what you're looking for? Our support team is here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Contact Support
                            </a>
                            <a
                                href="/help"
                                className="inline-flex items-center justify-center px-6 py-3 border border-blue-500 hover:border-blue-400 text-blue-400 hover:text-blue-300 font-medium rounded-lg transition-all duration-300"
                            >
                                <BookOpen className="w-5 h-5 mr-2" />
                                Help Center
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
