import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Database, TrendingUp, Cpu } from 'lucide-react';

const AIServices = () => {
    const features = [
        {
            icon: Brain,
            title: "AI Strategy",
            description: "Comprehensive AI strategy development and implementation"
        },
        {
            icon: Cpu,
            title: "Machine Learning",
            description: "Custom ML models and algorithms for your business"
        },
        {
            icon: Database,
            title: "Data Analytics",
            description: "Advanced analytics powered by artificial intelligence"
        },
        {
            icon: Shield,
            title: "AI Ethics",
            description: "Responsible AI development and governance"
        }
    ];
    
    const benefits = [
        "Increased operational efficiency by 60%",
        "Enhanced customer insights and personalization",
        "Automated decision-making processes",
        "Competitive advantage through AI innovation",
        "Scalable AI solutions that grow with your business"
    ];
    
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-pink-900 via-pink-800 to-rose-900 text-white py-20">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <motion.h1 
                        className="text-5xl md:text-6xl font-bold mb-6" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }}
                    >
                        AI Services for
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                            {" "}Innovation
                        </span>
                    </motion.h1>
                    <motion.p 
                        className="text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Harness the power of artificial intelligence to transform your business operations, 
                        enhance customer experiences, and drive innovation across all departments.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105">
                            Start Your AI Journey
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Our AI Capabilities</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Comprehensive AI services designed to meet your business challenges
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div 
                                key={feature.title} 
                                className="text-center p-6 bg-slate-700/50 rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-600" 
                                initial={{ opacity: 0, y: 20 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.6, delay: index * 0.1 }} 
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-8 h-8 text-pink-600"/>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
                            <p className="text-xl text-gray-300">
                                Experience the transformative power of AI with our proven approach
                            </p>
                        </div>

                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <motion.div 
                                    key={index} 
                                    className="flex items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700" 
                                    initial={{ opacity: 0, x: -20 }} 
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    transition={{ duration: 0.6, delay: index * 0.1 }} 
                                    viewport={{ once: true }}
                                >
                                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                                        <TrendingUp className="w-4 h-4 text-pink-600"/>
                                    </div>
                                    <span className="text-lg text-gray-300">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-pink-900/20 to-rose-900/20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Business with AI?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Let's discuss how our AI services can help you achieve your business goals
                    </p>
                    <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg font-semibold text-white hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105">
                        Get Started Today
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AIServices;
