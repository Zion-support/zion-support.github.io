import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Workflow, Brain, Clock, TrendingUp, Users, Database, Globe, Target, CheckCircle, BarChart3 } from 'lucide-react';

const AIWorkflowAutomation = () => {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Process Analysis",
            description: "Intelligent analysis of existing workflows to identify optimization opportunities and automation potential",
            benefits: ["Process mapping", "Bottleneck identification", "Efficiency scoring", "Automation recommendations"]
        },
        {
            icon: Workflow,
            title: "Intelligent Workflow Design",
            description: "AI-driven workflow design that adapts to business needs and automatically optimizes for performance",
            benefits: ["Dynamic workflows", "Conditional logic", "Exception handling", "Performance optimization"]
        },
        {
            icon: Zap,
            title: "Automated Decision Making",
            description: "AI algorithms that make intelligent decisions based on data, rules, and historical patterns",
            benefits: ["Rule-based decisions", "Machine learning", "Risk assessment", "Compliance checking"]
        },
        {
            icon: Clock,
            title: "Real-time Monitoring",
            description: "Continuous monitoring of workflow performance with instant alerts and proactive optimization",
            benefits: ["Performance tracking", "Real-time alerts", "Predictive maintenance", "KPI monitoring"]
        }
    ];

    const solutions = [
        {
            category: "Document Processing",
            icon: Database,
            solutions: [
                "Automated document classification",
                "Intelligent data extraction",
                "Form processing automation",
                "Document routing and approval",
                "Compliance checking"
            ]
        },
        {
            category: "Customer Service",
            icon: Users,
            solutions: [
                "Ticket routing and prioritization",
                "Automated responses",
                "Customer inquiry handling",
                "Service level monitoring",
                "Customer satisfaction tracking"
            ]
        },
        {
            category: "Financial Operations",
            icon: TrendingUp,
            solutions: [
                "Invoice processing automation",
                "Payment approval workflows",
                "Expense report processing",
                "Budget monitoring",
                "Financial reporting"
            ]
        },
        {
            category: "HR & Recruitment",
            icon: Users,
            solutions: [
                "Resume screening automation",
                "Interview scheduling",
                "Onboarding workflows",
                "Performance review automation",
                "Employee self-service"
            ]
        }
    ];

    const technologies = [
        {
            name: "Machine Learning",
            description: "Advanced ML algorithms for process optimization and decision making",
            icon: Brain
        },
        {
            name: "Robotic Process Automation",
            description: "RPA tools for repetitive task automation",
            icon: Workflow
        },
        {
            name: "Natural Language Processing",
            description: "AI-powered text analysis and document processing",
            icon: Database
        },
        {
            name: "Workflow Engine",
            description: "Scalable workflow orchestration platform",
            icon: Zap
        },
        {
            name: "Real-time Analytics",
            description: "Instant performance monitoring and optimization",
            icon: BarChart3
        }
    ];

    const benefits = [
        "90% reduction in manual processing time",
        "Improved accuracy and compliance",
        "Real-time workflow optimization",
        "Scalable automation solutions",
        "Enhanced decision-making capabilities"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            AI Workflow
                            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                {' '}Automation
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                            Transform your business processes with intelligent AI-powered workflow automation. 
                            Streamline operations, reduce costs, and improve efficiency across your organization.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                                Get Started
                            </button>
                            <button className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-gray-300 mb-6">{feature.description}</p>
                                <div className="space-y-2">
                                    {feature.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-400" />
                                            <span className="text-gray-300">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Industry Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={solution.category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                        <solution.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{solution.category}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {solution.solutions.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Technologies Used</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                                    <tech.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                                <p className="text-gray-300">{tech.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-12">Why Choose AI Workflow Automation?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-white font-semibold">{benefit}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Automate Your Workflows?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Transform your business processes with AI-powered workflow automation. 
                            Contact us today to get started.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                                Get Started Today
                            </button>
                            <button className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                                Schedule Demo
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AIWorkflowAutomation;