import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Shield, Brain, BarChart3, Zap, Lock, ArrowRight, CheckCircle, CreditCard } from 'lucide-react';

const FinancialSolutions = () => {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Risk Assessment",
            description: "Advanced machine learning models for credit risk and fraud detection"
        },
        {
            icon: BarChart3,
            title: "Predictive Analytics",
            description: "Forecast market trends and customer behavior with high accuracy"
        },
        {
            icon: Shield,
            title: "Regulatory Compliance",
            description: "Automated compliance monitoring for financial regulations"
        },
        {
            icon: Zap,
            title: "Real-time Processing",
            description: "High-speed transaction processing and settlement systems"
        },
        {
            icon: Lock,
            title: "Enterprise Security",
            description: "Bank-grade security with multi-layer encryption and authentication"
        },
        {
            icon: TrendingUp,
            title: "Portfolio Optimization",
            description: "AI-driven investment strategies and portfolio management"
        }
    ];

    const benefits = [
        "Reduce fraud losses by 60-80%",
        "Improve risk assessment accuracy by 40%",
        "Lower operational costs by 30-50%",
        "Enhance customer experience",
        "Faster transaction processing",
        "Better regulatory compliance"
    ];

    const solutions = [
        {
            title: "Digital Banking",
            description: "Modern digital banking platforms with AI-powered features"
        },
        {
            title: "Payment Processing",
            description: "Secure and efficient payment processing solutions"
        },
        {
            title: "Risk Management",
            description: "Comprehensive risk assessment and mitigation tools"
        },
        {
            title: "Compliance Automation",
            description: "Automated regulatory compliance and reporting"
        }
    ];

    const industries = [
        "Retail Banking",
        "Investment Banking",
        "Insurance",
        "Fintech",
        "Credit Unions",
        "Wealth Management",
        "Payment Processors",
        "Regulatory Bodies"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                <DollarSign className="w-10 h-10 text-white"/>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Financial Solutions
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                            Revolutionize your financial services with cutting-edge AI technology. Enhance security,
                            improve efficiency, and deliver exceptional customer experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                                Get Started
                            </button>
                            <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                                Schedule Demo
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
                    >
                        Key Financial Features
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="w-8 h-8 text-white"/>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-300">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
                    >
                        Business Benefits
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gray-800/50 rounded-xl p-6 text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                                <p className="text-gray-300">{benefit}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
                    >
                        Our Financial Solutions
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50"
                            >
                                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                                <p className="text-gray-300 mb-6">{solution.description}</p>
                                <button className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
                    >
                        Industries We Serve
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gray-800/50 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-colors"
                            >
                                <p className="text-gray-300 font-medium">{industry}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                    >
                        Ready to Transform Your Financial Services?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-gray-300 mb-8"
                    >
                        Let's discuss how our financial solutions can drive growth and enhance security
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                            Schedule Demo
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default FinancialSolutions;